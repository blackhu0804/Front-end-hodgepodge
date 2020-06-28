/*
 * @lc app=leetcode.cn id=209 lang=javascript
 *
 * [209] 长度最小的子数组
 */

// @lc code=start
/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  const int_max = Number.MAX_SAFE_INTEGER
  let ans = int_max;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= s) {
      ans = Math.min(ans, i - j + 1);
      sum -= nums[j++];
    }
  }
  return ans === int_max ? 0 : ans;
};
// @lc code=end

