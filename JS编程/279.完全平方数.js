/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = new Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = i;
    for (let j = 1; i - j*j >= 0; j++) {
      dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
    }
  }

  return dp[n];
};
// @lc code=end

