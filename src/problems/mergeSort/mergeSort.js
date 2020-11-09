const mergeSort = array => {
  if (array.length === 1) return array;

  const midpoint = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, midpoint));
  const right = mergeSort(array.slice(midpoint));

  const sorted = merge(left, right);
  return sorted;
};

const merge = (left, right) => {
  const sorted = [];

  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      sorted.push(left[i]);
      i++;
    } else if (right[j] < left[i]) {
      sorted.push(right[j]);
      j++;
    }
  }
  if (i === left.length) {
    sorted.push(...right.slice(j));
  }
  if (j === right.length) {
    sorted.push(...left.slice(i));
  }
  return sorted;
};

export { mergeSort };
