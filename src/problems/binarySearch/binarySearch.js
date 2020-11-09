const binarySearch = (array, target) => {
  return binarySearchItr(array, target);
};

const binarySearchItr = (array, target) => {
  let start = 0,
    end = array.length - 1;

  while (start <= end) {
    let midpoint = Math.floor((end - start + 1) / 2) + start;
    if (array[midpoint] === target) {
      return midpoint;
    }
    if (target < array[midpoint]) {
      end = midpoint - 1;
    }
    if (target > array[midpoint]) {
      start = midpoint + 1;
    }
  }

  return null;
};

const binarySearchRec = (array, target) => {
  if (array.length === 0) {
    return null;
  }

  let start = 0,
    end = array.length - 1;

  let midpoint = Math.floor((end - start + 1) / 2);

  if (array[midpoint] === target) {
    return midpoint;
  }

  if (array[midpoint] < target) {
    return binarySearchRec(array.slice(0, midpoint), target);
  }

  if (array[midpoint] > target) {
    const result = binarySearchRec(array.slice(midpoint + 1), target);
    if (result !== null) {
      return result + midpoint + 1;
    }
    return null;
  }
};

export { binarySearch, binarySearchRec };
