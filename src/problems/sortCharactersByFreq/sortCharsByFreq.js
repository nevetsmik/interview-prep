// https://leetcode.com/problems/sort-characters-by-frequency/

const sortCharsByFreq = (str) => {
  const mapping = {};
  str.split("").forEach((s) => {
    mapping[s] = mapping[s] || 0;
    mapping[s]++;
  });
  const arr = Object.entries(mapping).map(([ltr, count]) => ({ ltr, count }));
  return arr
    .sort((a, b) => b.count - a.count)
    .map(produceNumLtrs)
    .join("");
};

const produceNumLtrs = ({ ltr, count }) => {
  let str = "";
  for (let i = 0; i < count; i++) {
    str += ltr;
  }
  return str;
};

export default sortCharsByFreq;
