/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const map = {
    '*': (a, b) => a * b,
    '/': (a, b) => Math.trunc(a / b),
    '-': (a, b) => a - b,
    '+': (a, b) => a + b
  }
  const res = [];
  tokens.forEach(item => {
    if (Object.keys(map).includes(item)) {
      const b = res.pop();
      const a = res.pop();
      const resNum = map[item](a, b);

      res.push(resNum);
    } else {
      res.push(Number(item));
    }
  })

  return res.pop();
};
// @lc code=end

