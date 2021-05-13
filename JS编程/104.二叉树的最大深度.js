/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (root === null) return 0;

  let maxDep = 1;
  function dfs(root, dep) {
    if (!root.left && !root.right) {
      maxDep = Math.max(dep, maxDep);
    }

    if (root.left) dfs(root.left, dep + 1);
    if (root.right) dfs(root.right, dep + 1);
    return maxDep;
  }

  return dfs(root, 1);
};
// @lc code=end

