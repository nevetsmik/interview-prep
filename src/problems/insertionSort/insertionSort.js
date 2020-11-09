/** 
 The left side of the array is sorted and the right is unsorted. For each iteration in the inner loop, take the first
 element in the unsorted side of the array and find it's correct position in the sorted side, swapping values at each index.
*/
const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0 && array[j - 1] > array[j]; j--) {
      let temp = array[j - 1];
      array[j - 1] = array[j];
      array[j] = temp;
    }
  }
  return array;
};

const unsorted = [5, 3, 9, 2, 10, 11, 6, 4];

const sorted = insertionSort(unsorted);

console.log("unsorted", unsorted);
console.log("sorted", sorted);
