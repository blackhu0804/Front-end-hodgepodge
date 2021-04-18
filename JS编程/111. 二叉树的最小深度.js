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
// 递归
// var minDepth = function(root) {
//   if (root === null) return 0;
//   if (root.left === null && root.right === null) return 1;

//   let ret = Number.MAX_SAFE_INTEGER;

//   if (root.left !== null) {
//     ret = Math.min(minDepth(root.left), ret);
//   }
//   if (root.right !== null) {
//     ret = Math.min(minDepth(root.right), ret);
//   }

//   return ret + 1;
// };


/**
 * BFS
 * @returns 
 */
var minDepth = function(root) {
  if (root === null) return 0;

  const queue = [root];
  let depth = 1;

  while(queue.length) {
    let levelSize = queue.length; // 当前层节点个数
    for (let i = 0; i < levelSize; i++) {
      const cur = queue.shift();
      if (cur.left === null && cur.right === null) return depth;

      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    depth++;
  }
};