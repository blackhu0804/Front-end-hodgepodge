/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   while(nums2.length) {
//     let num = nums2.shift();
//     if (num >= nums1[m + n - nums2.length - 2]) {
//       nums1[m + n - nums2.length - 1] = num;
//     } else {
//       for (let i = 0; i < m + n - nums2.length; i++) {
//         if (num <= nums1[i]) {
//           nums1.splice(i, 0, num);
//           break;
//         }
//       }
//     }
//   }

//   return nums1.slice(0, 6);
// };

var merge = function(nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n -1;

  while (i >= 0 || j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k--] = nums2[j--];
    } else if (nums2[j] <= nums1[i]) {
      nums1[k--] = nums1[i--];
    } else if (i < 0) {
      nums1[k--] = nums2[j--];
    } else if (j < 0) {
      nums1[k--] = nums1[i--];
    }
  }

  return nums1;
};

console.log(merge([1,2,3,0,0,0], 3, [2, 5, 6], 3))
// @lc code=end

