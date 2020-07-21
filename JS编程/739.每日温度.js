/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const stack = [];
  const res = new Array(T.length).fill(0);
  for (let i = 0; i < T.length; i++) {
    while(stack.length !== 0 && T[i] > T[stack[stack.length - 1]]) {
      res[stack[stack.length - 1]] = i - stack[stack.length - 1];
      stack.pop();
    }

    stack.push(i);
  }
  return res;
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
// @lc code=end

