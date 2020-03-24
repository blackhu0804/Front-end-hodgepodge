/**
 * https://leetcode-cn.com/problems/the-masseuse-lcci/
 * 
 * @param {number[]} nums
 * @return {number}
 */
var massage = function(nums) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < nums.length; i++) {
    let c = Math.max(b, a + nums[i]);
    a = b;
    b = c;
  }
  return b;
};