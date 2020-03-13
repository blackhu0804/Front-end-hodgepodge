/**
 * https://leetcode-cn.com/problems/majority-element/
 */

const majorityElement = function(nums) {
  nums.sort((a, b) => {
    return a - b;
  })

  return nums[Math.floor(nums.length/2)];
};

const nums = [3, 2, 3, 3, 3];
console.log(majorityElement(nums))