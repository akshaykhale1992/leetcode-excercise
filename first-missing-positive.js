const firstMissingPositive = (nums) => {
  let max = nums[0];
  nums.forEach((n) => { if (n > max) { max = n } });
  if (max <= 0) {
    return 1;
  }
  let i = 1;
  for (; i < max; i++)
    if (!nums.includes(i))
      return i;
  return ++i;
};