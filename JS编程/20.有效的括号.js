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
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (Object.keys(map).includes(s[i])) {
      stack.push(s[i]);
    } else if (map[stack.pop()] !== s[i]) {
      return false;
    }
  }

  return stack.length === 0;
};

isValid('()');
// @lc code=end

