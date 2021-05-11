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
// var levelOrder = function(root) {
//   const result = [];
//   function traversal(root, depth) {
//     if (root !== null) {
//       if (!result[depth]) {
//         result[depth] = [];
//       }
//       result[depth].push(root.val);
//       traversal(root.left, depth + 1);
//       traversal(root.right, depth + 1);
//     }
//   }
//   traversal(root, 0);
//   return result;
// };

// BFS
var levelOrder = function(root) {
  if (root === null) return [];

  let result = [];
  let queue = [root];
  while(queue.length) {
    let arr = [];
    let len = queue.length;
    while(len) {
      let node = queue.shift();
      arr.push(node.val);
      
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      len--;
    };
    result.push(arr);
  };

  return result;
};
// @lc code=end

