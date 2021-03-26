/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let i = 0;
  let j = 0;
  
  let result = 0;
  let sum = 0;
  while (i < nums.length && j < nums.length) {
    if (i === j) {
      sum = nums[j];
    }

    if (sum < target) {
      j++;
      sum += nums[j];
    } else {
      let len = j - i + 1;
      result = result === 0 ? len : Math.min(result, len);
      sum -= nums[i];
      i++;
    }
  }

  return result;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1, 4, 4]));