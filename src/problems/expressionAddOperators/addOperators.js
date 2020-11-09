const addOperators = (num, target) => {
  return dfs(num, target, "", 0);
};

const dfs = (num, target, currentCombo = "", value = 0) => {
  const operators = ["+", "*", "-"];
  const result = [];
  if (num.length === 0) {
    if (value === target) {
      result.push(currentCombo);
      return result;
    }
    return [];
  }

  operators.forEach((op, idx) => {
    let temp = +value;
    if (idx === 0) {
      temp += +num[0];
    }
    if (idx === 1) {
      temp *= +num[0];
    }
    if (idx === 2) {
      temp -= +num[0];
    }
    debugger;
    result.push(
      ...dfs(num.slice(1), target, `${currentCombo}${num[0]}${op}`, temp)
    );
  });
  return result;
};

export default addOperators;
