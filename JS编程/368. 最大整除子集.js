/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  });

  let dp = new Array(nums.length);
  let maxIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    dp[i] = 1;
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }

      if (dp[i] > dp[maxIndex]) {
        maxIndex = i;
      }
    }
  }
  let result = [nums[maxIndex]];
  for (let i = nums.length - 1; i >= 0 && dp[maxIndex] > 1; i--) {
    if (dp[maxIndex] - 1 === dp[i] && nums[maxIndex] % nums[i] === 0) {
      result.push(nums[i]);
      maxIndex = i;
    }
  }

  return result;
};

console.log(largestDivisibleSubset([1,2,3]))