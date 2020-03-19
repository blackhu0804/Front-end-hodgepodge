/**
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 * 
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 1) {
    return 0;
  } 
  let result = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > result) {
        result = prices[j] - prices[i];
      }
    }
  }

  return result;
};

const prices = [7,1,5,3,6,4];
console.log(maxProfit(prices))