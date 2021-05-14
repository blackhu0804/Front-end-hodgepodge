/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根节点到叶节点数字之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
  return dfs(root, 0);
};

function dfs(node, prevVal) {
  if (!node) return 0;

  let sum = prevVal * 10 + node.val;

  if (node.left === null && node.right === null) {
    return sum;
  } else {
    // console.log('sum:', dfs(node.left, sum) + dfs(node.right, sum));
    return dfs(node.left, sum) + dfs(node.right, sum);
  }
}

// @lc code=end