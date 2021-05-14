/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  if (nums.length < 1) return nums;

  let left = [];
  let right = [];

  let mid = Math.floor(nums.length / 2);
  let partionVal = nums.splice(mid, 1)[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < partionVal) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return [...sortArray(left), partionVal, ...sortArray(right)];
};

console.log(sortArray([4,3,2,1]))