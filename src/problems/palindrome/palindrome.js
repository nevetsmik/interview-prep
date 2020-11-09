// const isPalindrome = string => {
//   const [left, right] = findMiddle(array.length);

//   while (left >= 0 && right >= array.length) {
//     if (array[left] !== array[right]) {
//       return false;
//     }
//   }
//   return true;
// };

// const findMiddle = length => {
//   const middle = Math.floor(length / 2);
//   if (length % 2 === 0) {
//     return [middle - 1, middle];
//   }
//   return [middle, middle];
// };

// const isPalindrome = (str) => {
//   for (let i = 0; i <= str.length / 2; i++) {
//     if (str[i] !== str[str.length - i - 1]) {
//       return false;
//     }
//   }
//   return true;
// };

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};
export default isPalindrome;
