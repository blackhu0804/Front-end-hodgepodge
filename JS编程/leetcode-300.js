/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function(nums) {
  if (nums.length < 2) {
    return nums.length;
  }
  let dp = new Array(nums.length).fill(1);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(max, dp[i]);
  }
  return max;
};

const arr = [10,9,2,5,3,4]
console.log(lengthOfLIS(arr))