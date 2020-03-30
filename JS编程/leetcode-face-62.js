/**
 * https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/submissions/
 * 
 * 思路：活到最后的位置肯定为0
 * 所以从倒数第二次倒推，安全位置为 (0 + m) % 2
 * 倒数第三次 ((0 + m) + m) % 3
 * 依次类推
 * 
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    result = (result + m) % i;
  }
  return result;
};