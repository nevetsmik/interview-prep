const bubbleSort = array => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
};

const unsorted = [6, 3, 4, 0, 10, 9, 5, 7];
console.log("unsorted", unsorted);
const sorted = bubbleSort(unsorted);
console.log("sorted", sorted);
