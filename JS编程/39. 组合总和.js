/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates.sort((a, b) => a - b);
  let result = [];
  let cur = [];

  dfs(candidates, target, 0, cur, result);
  return result;
};

function dfs(candidates, target, level, cur, result) {
  if (target === 0) {
    result.push(cur.slice());
    return;
  }

  // 搜索
  for(let i = level; i < candidates.length; i++) {
    if (target - candidates[i] < 0) break;
    cur.push(candidates[i]);
    dfs(candidates, target - candidates[i], i, cur, result);
    cur.pop();
  }
}

console.log(combinationSum([2,3,6,7], 7))