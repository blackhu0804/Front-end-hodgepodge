/**
 * @param {number[]} nums
 * @return {number}
 */
// 分治
// var majorityElement = function(nums) {
//   return getMajority(nums, 0, nums.length - 1);
// };

// function getMajority(nums, left, right) {
//   if(nums[left] === nums[right]) return nums[left];

//   mid = left + (right - left) / 2;

//   let leftMajority = getMajority(nums, left, mid);
//   let rightMajority = getMajority(nums, mid+1, right);

//   if (leftMajority === rightMajority) return leftMajority;

//   let leftCount = 0;
//   let rightCount = 0;
//   for (let i = left; i < right; i++) {
//     if (nums[i] === leftMajority) {
//       leftCount++;
//     }

//     if (nums[i] === rightMajority) {
//       rightCount++;
//     }
//   }

//   if (leftCount > rightCount) return leftMajority;

//   return rightMajority;
// }


// map
var majorityElement = function(nums) {
  let map = new Map();

  for(let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i]) + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let result;
  map.forEach((item, key) => {
    if (item > Math.floor(nums.length / 2)) {
      result = key;
    }
  });

  return result;
};


console.log(majorityElement([3, 2, 3]))