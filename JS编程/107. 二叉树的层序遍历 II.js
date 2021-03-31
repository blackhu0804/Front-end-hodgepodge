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
 * @return {number[][]}
 */
// BFS 结果 reverse
var levelOrderBottom = function(root) {
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
    }
    result.unshift(arr);
  };

  return result;
};