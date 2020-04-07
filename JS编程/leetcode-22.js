/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  if (n === 0) return [''];
  if (n === 1) return ['()'];
  let result = [];
  
  const help = function(str, left, right) {
    if (str.length === 2*n) {
      result.push(str);
    }
    if (left < n) {
      help(str + '(', left + 1, right);
    }
    if (right < left) {
      help(str + ')', left, right + 1);
    }
  }

  help('', 0, 0);

  return result;
};

console.log(generateParenthesis(3));