const quickSelect = (array, k) => {
  if (array.length <= 1) return array;

  const pivotIndex = partition(array);

  if (k === pivotIndex + 1) {
    return array[pivotIndex];
  } else if (k < pivotIndex + 1) {
    return quickSelect(array.slice(0, pivotIndex), k);
  } else {
    return quickSelect(array.slice(pivotIndex), k - pivotIndex);
  }
};

const partition = array => {
  let start = 0,
    end = array.length - 1;

  let pivot = Math.floor(Math.random() * array.length);

  [array[end], array[pivot]] = [array[pivot], array[end]];

  array.forEach((value, pos) => {
    if (value > array[end]) {
      [array[start], array[pos]] = [array[pos], array[start]];
      start++;
    }
  });

  [array[start], array[end]] = [array[end], array[start]];

  return start;
};

const unsorted = [10, 4, 8, 2, 9, 23, 20, 1, 30];
const k = 2;

const kthSmallest = quickSelect(unsorted, k);

console.log(`${k} kthSmallest`, kthSmallest);

// export { quickSelect };
