// https://leetcode.com/problems/zigzag-conversion/

const convert = (s, numRows) => {
  if (numRows <= 1) {
    return s;
  }

  const rows = Array(numRows).fill("");

  let i = 0;
  let isDown = true;
  s.split("").forEach((ltr) => {
    rows[i] = rows[i].concat(ltr);
    if (i == numRows - 1) {
      isDown = false;
    }
    if (i == 0) {
      isDown = true;
    }
    if (isDown) {
      i++;
    } else {
      i--;
    }
  });
  return rows.join("");
};

export default convert;
