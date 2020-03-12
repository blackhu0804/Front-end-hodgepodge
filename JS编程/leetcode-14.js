/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  let result = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return result;
    }
    result += strs[0][i];
  }
  return result;
};

const strs = ["flower","flow","flight"]

longestCommonPrefix(strs)