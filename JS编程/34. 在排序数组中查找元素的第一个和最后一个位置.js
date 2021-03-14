/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  if (nums.length === 0) return [-1, -1];

  let firstPosition = getFirstPosition(nums, target);
  if (firstPosition === -1) return [-1, -1];

  let lastPosition = getLastPosition(nums, target);

  return [firstPosition, lastPosition];
};

function getFirstPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    
    // 开始位置
    if (nums[mid] < target) { // 开始的值肯定不在左边
      left = mid + 1;
    } else if (nums[mid] === target) {
      right = mid;
    } else {
      right = mid - 1;
    }
  }

  if (nums[left] === target) {
    return left;
  }
  return -1;
}

function getLastPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while (left < right) {
    let mid = Math.ceil((right + left) / 2);

    if (nums[mid] > target) { // 结束的值肯定不会在右边
      right = mid - 1;
    } else if (nums[mid] === target) {
      left = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

console.log(searchRange([2, 2], 2))