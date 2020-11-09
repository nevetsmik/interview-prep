const mergeIntervals = intervals => {
  const sortedIntervals = intervals
    .map(i => ({ ...i }))
    .sort((a, b) => a.start - b.start);
  const stack = [sortedIntervals[0]];
  sortedIntervals.slice(1).forEach(i => {
    if (stack[stack.length - 1].end > i.start) {
      stack[stack.length - 1].end = Math.max(
        i.end,
        stack[stack.length - 1].end
      );
    } else {
      stack.push(i);
    }
  });
  return stack;
};

export default mergeIntervals;
