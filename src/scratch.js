const ltrCombinations = (numbers) => {
  const mapping = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  return dfs(numbers, mapping);
};

const dfs = (numbers, mapping, currentCombo = "") => {
  const result = [];
  if (numbers.length === 0) {
    result.push(currentCombo);
    return result;
  }

  const ltrs = mapping[numbers[0]];
  ltrs.split("").forEach((ltr) => {
    result.push(...dfs(numbers.slice(1), mapping, currentCombo + ltr));
  });

  return result;
};

export default ltrCombinations;
