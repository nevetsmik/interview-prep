const threeSumClosest = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {}
};

const twoSum = (nums, target) => {
  const mapping = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (mapping[complement]) {
      return [num, target];
    }
  }
  return [null, null];
};
