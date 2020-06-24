/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const result = [];
  function traversal(root, depth) {
    if (root !== null) {
      if (!result[depth]) {
        result[depth] = [];
      }
      result[depth].push(root.val);
      traversal(root.left, depth + 1);
      traversal(root.right, depth + 1);
    }
  }
  traversal(root, 0);
  return result;
};
// @lc code=end

