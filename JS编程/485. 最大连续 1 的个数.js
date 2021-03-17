/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      result++;
    } else {
      result = 0;
    }
    maxLength = Math.max(maxLength, result);
  }

  return maxLength;
};