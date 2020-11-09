// Sum duplicate values in an area

const sumDuplicates = (nums) => {
  const frequencyMapping = {};
  nums.forEach(
    (num) => (frequencyMapping[num] = frequencyMapping[num] + 1 || 1)
  );
  let sum = 0;
  Object.entries(frequencyMapping).forEach(([key, value]) => {
    if (value > 1) {
      sum += key * value;
    }
  });
  return sum;
};

// const sumDuplicates = (nums) => {
//   const frequencyMapping = {};
//   let sum = 0;
//   nums.forEach((num) => {
//     frequencyMapping[num] = frequencyMapping[num] + 1 || 1;
//     if (frequencyMapping[num] === 2) {
//       sum += num * 2;
//     }
//     if (frequencyMapping[num] > 2) {
//       sum += num;
//     }
//   });
//   return sum;
// };

export default sumDuplicates;
