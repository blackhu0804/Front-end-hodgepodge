/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
  if (!nums || nums.length === 0) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (nums[left] >= target) {
    return left;
  } else {
    return left + 1;
  }
};

console.log(searchInsert([1,3,5,6], 7))