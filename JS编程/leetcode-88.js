/**
 * https://leetcode-cn.com/problems/merge-sorted-array/
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2)
  return nums1.sort((a, b) => {
    return a - b;
  });
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))