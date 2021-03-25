/**
 * @param {number[]} nums
 * @return {number}
 */
// 直接遍历
// var findPeakElement = function(nums) {
//   if (nums.length <= 1) return 0;

//   if (nums[0] > nums[1]) {
//     return 0;
//   }

//   if (nums[nums.length - 1] > nums[nums.length - 2]) {
//     return nums.length -1;
//   }

//   for (let i = 1; i < nums.length - 1; i++) {
//     if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
//       return i;
//     }
//   }

//   return -1;
// };

// 二分查找
var findPeakElement = function(nums) {
  if (!nums || nums.length === 0) {
    return -1;
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < nums[mid+1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

console.log(findPeakElement([1,2,1,3,5,6,4]))