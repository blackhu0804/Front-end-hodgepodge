/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits === '') return [];
  let map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let result = [];
  const dfs = (str, index) => {
    if (index >= digits.length) {
      result.push(str);
      return;
    }

    let curStr = map[digits[index]];
    for (let i of curStr) {
      dfs(str + i, index + 1);
    }
  }

  dfs('', 0);

  return result;
};

console.log(letterCombinations('23'))