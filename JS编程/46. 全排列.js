/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let cur = [];
  let result = [];
  let visited = {};

  dfs(nums, cur, visited, result);
  return result;
};

function dfs (nums, cur, visited, result) {
  if (cur.length === nums.length) {
    result.push(cur.slice());
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[nums[i]]) continue;
    visited[nums[i]] = true;
    cur.push(nums[i]);
    dfs(nums, cur, visited, result);
    visited[nums[i]] = false;
    cur.pop();
  }
}

console.log(permute([1,4,3]))