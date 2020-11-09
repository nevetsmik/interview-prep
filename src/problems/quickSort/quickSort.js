const quickSort = array => {
  if (array.length <= 1) {
    return array;
  }

  const pivotPos = Math.floor(Math.random() * array.length);
  const leftSide = array.filter(
    (num, i) => num <= array[pivotPos] && i !== pivotPos
  );
  const rightSide = array.filter(
    (num, i) => num > array[pivotPos] && i !== pivotPos
  );
  return quickSort(leftSide)
    .concat([array[pivotPos]])
    .concat(quickSort(rightSide));
};

const unsorted = [10, 4, 8, 2, 9, 23, 20, 1, 30];
const sorted = quickSort(unsorted);

console.log("unsorted", unsorted);
console.log("sorted", sorted);

// export { quickSort };
