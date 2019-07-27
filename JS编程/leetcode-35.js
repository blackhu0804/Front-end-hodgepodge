/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if(target <= nums[0]) {
    return 0;
  }

  if (target === nums[nums.length - 1]) {
    return nums.length - 1;
  }

  if (target > nums[nums.length - 1]) {
    return nums.length;
  }

  for(let i = 0; i < nums.length - 1; i++) {
    if(nums[i] === target) {
      return i;
    } else if (target > nums[i] && target < nums[i+1]) {
      return i+1;
    }
  }
};
searchInsert([1, 3, 5, 6], 5)
