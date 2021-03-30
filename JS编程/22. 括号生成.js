/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  if (n === 0) return [];
  if (n === 1) return ['()'];

  let result = [];
  
  const dfs = (str, left, right) => {
    if (str.length === 2*n) {
      result.push(str);
    }

    if (left < n) {
      dfs(str + '(', left+1, right);
    }

    if (right < left) {
      dfs(str + ')', left, right+1);
    }
  }

  dfs('', 0, 0);

  return result;
};

console.log(generateParenthesis(3))