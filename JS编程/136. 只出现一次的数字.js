/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {};
  nums.forEach(num => {
    if (map[num]) {
      map[num]++;
    } else {
      map[num] = 1;
    }
  })
  let result;
  Object.keys(map).forEach(key => {
    if (map[key] === 1) {
      result = key;
    }
  })

  return result;
};