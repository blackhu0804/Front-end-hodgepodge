/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s === '') return true;

  const maps = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(maps).includes(s[i])) {
      arr.push(s[i]);
    } else if (maps[arr.pop()] !== s[i]) {
      return false
    }
  }
  if (arr.length === 0) return true;
  return false;
};
console.log(isValid('('));