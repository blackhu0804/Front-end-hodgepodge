/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力
// var subarraySum = function(nums, k) {
//   let count = 0;

//   for (let end = 0; end < nums.length; end++) {
//     let sum = 0;
//     for (let start = end; start >= 0; start--) {
//       sum += nums[start];
//       if (sum === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// 前缀和
// var subarraySum = function(nums, k) {
//   let presum = [];
//   presum[0] = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     presum[i + 1] = presum[i] + nums[i];
//   }

//   let count = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i; j < nums.length; j++) {
//       if (presum[j + 1] - presum[i] === k) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

// 前缀和 + Map
var subarraySum = function(nums, k) {
  const map = { 0 : 1 }
  let count = 0;
  let preSum = 0;

  for (let i = 0; i < nums.length; i++) {
    preSum += nums[i];

    if (map[preSum - k]) {
      count += map[preSum - k];
    }

    if (map[preSum]) {
      map[preSum]++;
    } else {
      map[preSum] = 1;
    }
  }
};

console.log(subarraySum([1, 1, 1], 2))