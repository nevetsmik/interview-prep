const subsets = (arr) => {
  if (arr.length <= 0) {
    return [""];
  }
  const subs = subsets(arr.slice(0, arr.length - 1)); // subs = [""]
  const moreSubs = subs.map((sub) => sub.concat(arr[arr.length - 1])); // subs = [""], arr[arr.length - 1] == "a"
  return moreSubs.concat(subs); // subs = [""] moreSubs = ["a"]
};

export default subsets;
