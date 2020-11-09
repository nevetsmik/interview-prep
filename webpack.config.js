const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpackMerge = require("webpack-merge");

// env is "development" or "prod"
const modeConfig = (env) => require(`./build-utils/webpack.${env}`)(env);
const applyPresetConfig = require("./build-utils/loadPresets");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = ({ mode, presets } = { mode: "development", presets: [] }) =>
  webpackMerge(
    {
      mode,
      entry: ["./src/index.js"],
      output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        chunkFilename: "[name].lazy-chunk.js",
      },
      module: {
        rules: [
          {
            enforce: "pre",
            test: /\.js?$/,
            loader: "eslint-loader",
            include: [resolve("src")],
            exclude: /node_modules/,
          },
          {
            test: /\.js/,
            loader: "babel-loader",
            include: [resolve("src")],
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          inject: false,
          hash: true,
          template: "./src/index.html",
          filename: "index.html",
        }),
        new webpack.ProgressPlugin(), // more output in the console for builds
      ],
    },
    modeConfig(mode),
    applyPresetConfig({ presets })
  );
