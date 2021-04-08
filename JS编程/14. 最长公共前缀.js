/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  let index = 0;
  let len = 0;
  if (strs.length < 1) return "";

  while(index < strs[0].length) {
    for (let i = 0; i < strs.length; i++) {
      if (strs[i][index] === strs[0][index]) {
        len++;
      } else {
        return strs[0].substring(0, index);
      }
      if (len === strs.length) {
        len = 0;
        index++;
      }
    }
  }

  return strs[0].substring(0, index);
};

console.log(longestCommonPrefix(['a']))