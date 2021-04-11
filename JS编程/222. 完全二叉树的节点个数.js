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
var countNodes = function(root) {
  if (!root) return 0;
  let queue = [root];

  let count = bfs(queue, 0);
  return count;
};

function bfs(queue, count) {
  while(queue.length) {
    let cur = queue.shift();
    count++;
    cur.left && queue.push(cur.left);
    cur.right && queue.push(cur.right);
  }

  return count;
}