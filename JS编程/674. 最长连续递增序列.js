/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  if (nums.length <= 1) return nums.length;

  let left = 0;
  let right = 1;
  let maxLen = 1;

  while (right < nums.length) {
    if (nums[right] > nums[right - 1]) {
      maxLen = Math.max((right - left + 1), maxLen);
    } else {
      left = right;
    }
    right++;
  }

  return maxLen;
};

console.log(findLengthOfLCIS([1,3,5,4,7]))