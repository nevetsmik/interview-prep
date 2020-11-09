// const rps = (numThrows) => {
//   const items = ["r", "p", "s"];

//   const results = [];

//   const fn = (throwsLeft, currentCombo) => {
//     if (throwsLeft === 0) {
//       results.push(currentCombo);
//     }

//     if (throwsLeft > 0) {
//       items.forEach((item) => {
//         fn(throwsLeft - 1, currentCombo.concat(item));
//       });
//     }
//   };

//   fn(numThrows, []);
//   return results;
// };

const rps = (numThrows, currentCombo) => {
  const items = ["r", "p", "s"];

  const results = [];

  if (numThrows === 0) {
    results.push(currentCombo);
    return results;
  }

  items.forEach((item) => {
    results.push(...rps(numThrows - 1, currentCombo.concat(item)));
  });

  return results;
};

export default rps;
