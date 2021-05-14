/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];

  let result = [];

  function dfs(str, leftNum, rightNum) {
    if (str.length === n * 2) {
      result.push(str);
      return;
    }

    if (leftNum < n) {
      dfs(str+'(', leftNum + 1, rightNum);
    }

    if (rightNum < leftNum) {
      dfs(str+')', leftNum, rightNum + 1)
    }
  }

  dfs('', 0, 0);

  return result;
};

console.log(generateParenthesis(3))