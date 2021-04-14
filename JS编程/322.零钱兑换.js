/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);

  dp[0] = 0;
  for (let i = 0; i < amount; i++) {
    for (let key of coins) {
      if (i - key >= 0) {
        dp[i] = Math.min(dp[i], dp[i - key] + 1);
      }
    }
  }
  console.log(dp);
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1, 2, 5], 11));