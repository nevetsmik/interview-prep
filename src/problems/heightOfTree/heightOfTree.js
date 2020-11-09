// const tree = [1, 2, 3, 4, -1, -1, -1];

const heightOfTree = (tree) => {
  if (tree.length === 0) return 0;
  const queue = [{ value: tree[0], level: 1, index: 0 }];
  let maxLevel = 1;
  while (queue.length > 0) {
    const { value, level, index } = queue.shift();
    if (value !== -1) {
      maxLevel = Math.max(level, maxLevel);
      const [left, right] = getChildren(index, tree.length);
      if (left !== null) {
        queue.push({ value, level: level + 1, index: left });
      }
      if (right !== null) {
        queue.push({ value, level: level + 1, index: right });
      }
    }
  }
  return maxLevel;
};

const getChildren = (parentIndex, size) => {
  const left = 2 * parentIndex + 1 < size ? 2 * parentIndex + 1 : null;
  const right = 2 * parentIndex + 2 < size ? 2 * parentIndex + 2 : null;
  return [left, right];
};

export default heightOfTree;
