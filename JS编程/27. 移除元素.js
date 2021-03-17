/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 双指针判断头和尾，头元素不等于val，i++；
// 尾元素等于val，j--
var removeElement = function(nums, val) {
  if (!nums || nums.length === 0) {
    return 0;
  }

  let i = 0;
  let j = nums.length - 1;
  while( i < j ) {
    if (nums[i] !== val) {
      i++;
    } else if (nums[j] === val) {
      j--;
    } else {
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }

  return nums[i] === val ? i : i+1;
};