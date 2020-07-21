/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const arr = s.split('');
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(map).includes(arr[i])) {
      res.push(arr[i]);
    } else if (map[res.pop()] !== arr[i]){
      return false;
    }
  }
  if (res.length === 0) {
    return true;
  }

  return false;
};

isValid('()');
// @lc code=end

