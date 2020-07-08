/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  if(nums.length === 0) return 0;
  let dp = new Array(nums.length)
  dp[0] = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], dp[i-1] + nums[i])
    result = Math.max(result, dp[i]);
  }

  return result
};

// @lc code=end

