/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let mergeArr = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      mergeArr.push(nums1.shift());
    } else {
      mergeArr.push(nums2.shift());
    }
  }

  mergeArr = nums1.length > 0 ? mergeArr.concat(nums1) : mergeArr.concat(nums2);

  if (mergeArr.length < 2) return mergeArr[0];

  let mid = mergeArr.length / 2;
  if (mergeArr.length % 2 === 0) {
    return (mergeArr[mid] + mergeArr[(mid) - 1]) === 0 ? 0 : ((mergeArr[mid] + mergeArr[(mid) - 1])) / 2;
  } else {
    return mergeArr[Math.floor(mid)];
  }
};


console.log(findMedianSortedArrays([1, 3], [2]));