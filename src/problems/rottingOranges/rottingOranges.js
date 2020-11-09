// https://leetcode.com/problems/rotting-oranges/

// 0 empty cell
// 1 fresh orange
// 2 rotten orange
const orangesRotting = (grid) => {
  const queue = [];
  let minutes = 0;
  let existsRottenOrange = false;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 2) {
        existsRottenOrange = true;
        queue.push([row, col]);
      }
      if (grid[row][col] === 1 && isNeighborsEmpty(grid, row, col)) {
        return -1;
      }
    }
  }
  if (!existsRottenOrange) {
    return 0;
  }
  if (queue.length === 0) {
    return -1;
  }
  const dirXY = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  while (queue.length > 0) {
    const [x, y] = queue.shift();
    let hasRotten = false;
    for (let i = 0; i < dirXY.length; i++) {
      const [dirX, dirY] = dirXY[i];
      const newX = x + dirX;
      const newY = y + dirY;
      if (
        newX >= 0 &&
        newX < grid.length &&
        newY >= 0 &&
        newY < grid[0].length &&
        grid[newX][newY] === 1
      ) {
        hasRotten = true;
        grid[newX][newY] = 0;
        queue.push([newX, newY]);
      }
    }
    if (hasRotten) {
      minutes++;
    }
  }
  return minutes;
};

const isNeighborsEmpty = (grid, row, col) => {
  const dirXY = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  return dirXY
    .filter(
      ([dx, dy]) =>
        row + dx >= 0 &&
        row + dx < grid.length &&
        col + dy >= 0 &&
        col + dy < grid[0].length
    )
    .every(([dx, dy]) => grid[row + dx][col + dy] === 0);
};

export default orangesRotting;
