/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function(root) {
  /**
   * BFS
   */
  // if (!root) return [];

  // let queue = [];
  // queue.push(root);
  // let result = [];
  // while(queue.length) {
  //   let len = queue.length;
  //   while(len) {
  //     let cur = queue.shift();
  //     if (len === 1) result.push(cur.val);
  //     if (cur.left) queue.push(cur.left);
  //     if (cur.right) queue.push(cur.right);
  //     len--;
  //   }
  // }

  // return result;

  /**
   * DFS
   */
  if (!root) return [];
  let result = []
  dfs(root, 0, result);
  return result;

  function dfs(root, step, result) {
    if (root) {
      if (step === result.length) {
        result.push(root.val);
      }
  
      dfs(root.right, step+1, result);
      dfs(root.left, step+1, result);
    }
  }
};
// @lc code=end

