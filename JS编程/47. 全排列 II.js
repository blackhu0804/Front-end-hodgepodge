/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let cur = [];
  let result = [];
  let visited = {};
  nums.sort((a, b) => a - b);

  dfs(nums, cur, visited, result);
  return result;
};

function dfs (nums, cur, visited, result) {
  if (cur.length === nums.length) {
    result.push(cur.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] === nums[i] && i > 0 && !visited[i - 1]) continue;
    
    if (visited[i]) continue;
    
    visited[i] = true;
    cur.push(nums[i]);
    dfs(nums, cur, visited, result);
    visited[i] = false;
    cur.pop();
  }
}

console.log(permute([1,1,2]))