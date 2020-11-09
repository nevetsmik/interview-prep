// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

// const letterCombinations = (digits) => {
//   const mapping = {
//     "2": "abc",
//     "3": "def",
//     "4": "ghi",
//     "5": "jkl",
//     "6": "mno",
//     "7": "pqrs",
//     "8": "tuv",
//     "9": "wxyz",
//   };
//   return helper(digits, mapping, "");
// };

// const helper = (digits, mapping, currentCombo) => {
//   const result = [];

//   if (digits === "") {
//     result.push(currentCombo);
//     return result;
//   }

//   const ltrs = mapping[digits[0]];
//   ltrs.split("").forEach((ltr) => {
//     result.push(...helper(digits.slice(1), mapping, currentCombo + ltr));
//   });

//   return result;
// };

const letterCombinations = (digits) => {
  const result = [];
  const mapping = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  };
  const dfs = (digits, currentCombo) => {
    if (digits.length === 0) {
      result.push(currentCombo);
      return;
    }

    const ltrs = mapping[digits[0]];
    ltrs.split("").forEach((ltr) => {
      dfs(digits.slice(1), currentCombo + ltr);
    });
  };

  dfs(digits, "");
  return result;
};

export default letterCombinations;
