/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];

  const dfs = (index, curArr) => {
    if (index === nums.length) {
      result.push(curArr.slice());
      return;
    }

    curArr.push(nums[index]);
    dfs(index + 1, curArr); // 选这个数
    curArr.pop(); 
    dfs(index + 1, curArr); // pop 出来相当于不选这个数
  }

  dfs(0, []);
  return result;
};

console.log(subsets([1, 2, 3]))