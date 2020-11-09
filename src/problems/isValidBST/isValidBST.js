const isValidBST = (tree) => {
  const inOrderValues = traverseInOrder(tree);
  for (let i = 0; i < inOrderValues.length - 1; i++) {
    if (inOrderValues[i] > inOrderValues[i + 1]) {
      return false;
    }
  }
  return true;
};

const traverseInOrder = (tree) => {
  const values = [];

  if (tree === null) {
    return values;
  }

  values.push(...traverseInOrder(tree.left));

  values.push(tree.value);

  values.push(...traverseInOrder(tree.right));

  return values;
};

export default isValidBST;
