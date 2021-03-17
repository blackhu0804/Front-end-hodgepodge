/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let jumps = [];
  let maxJump = 0;
  nums.forEach((num, index) => {
    jumps.push(num + index);
  });
  let i = 0;
  while(i < jumps.length && i <= maxJump) {
    if (maxJump < jumps[i]) {
      maxJump = jumps[i];
    }
    i++;
  }

  return i === jumps.length;
};

console.log(canJump([2,3,1,1,4]))