/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let result = [];

  while (nums1.length) {
    let value = nums1.shift();
    let index = nums2.indexOf(value);

    for (index; index <= nums2.length - 1; index++) {
      if (nums2[index] > value) {
        result.push(nums2[index]);
        break;
      } else if (index === nums2.length - 1 && nums2[index] <= value) {
        result.push(-1)
      }
    }
  }

  return result;
};

console.log(nextGreaterElement([4, 1, 2], [1,2,3,4]))