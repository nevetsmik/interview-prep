const curryMe = function (n) {
  const arr = [];
  const inner = (y) => {
    arr.push(y);
    if (arr.length === n) {
      return arr.reduce((accum, value) => accum + value, 0);
    }
    return inner;
  };
  return inner;
};

const curry2 = function (nArg) {
  const argArray = [];
  const _curriedFn = (arg) => {
    argArray.push(arg);
    if (argArray.length === nArg) {
      // spreading the array into individual arguments
      return this(...argArray);
    } else {
      return _curriedFn;
    }
  };
  return _curriedFn;
};

export { curryMe, curry2 };
