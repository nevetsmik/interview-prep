// const uniquePathsWithObstacles = board => {
//   if (board[0][0] === 1) return 0;
//   return dfs(board, 0, 0);
// };

// const dfs = (board, i, j) => {
//   if (i === board.length - 1 && j === board[0].length - 1) {
//     return 1;
//   }
//   if (i < board.length && j < board[0].length && board[i][j] === 1) return 0;
//   if (i < board.length && j < board[0].length)
//     return dfs(board, i + 1, j) + dfs(board, i, j + 1);
//   if (i < board.length) return dfs(board, i + 1, j);
//   if (j < board[0].length) return dfs(board, i, j + 1);
//   return 0;
// };

// export default uniquePathsWithObstacles;

const uniquePathsWithObstacles = obstacleGrid => {
  const board = obstacleGrid.map(row => [...row]);
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      if (r === 0) {
        if (board[0][c] === 1 || (c > 0 && board[0][c - 1] === 0)) {
          board[0][c] = 0;
        } else {
          board[0][c] = 1;
        }
      } else if (c === 0) {
        if (board[r][0] === 1 || (r > 0 && board[r - 1][c] === 0)) {
          board[r][0] = 0;
        } else {
          board[r][0] = 1;
        }
      } else {
        if (board[r][c] === 1) {
          board[r][c] = 0;
        } else {
          board[r][c] = board[r - 1][c] + board[r][c - 1];
        }
      }
    }
  }
  return board[board.length - 1][board[0].length - 1];
};

export default uniquePathsWithObstacles;
