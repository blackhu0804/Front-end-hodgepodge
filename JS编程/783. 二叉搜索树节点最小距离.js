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
var minDiffInBST = function(root) {
  if (!root) return root;

  let result = Infinity;
  let stack = [];
  let cur = root;
  let pre = null;

  while(stack.length || cur) {
    while(cur) {
      stack.push(cur);
      cur = cur.left;
    }

    cur = stack.pop();
    if (pre) {
      result = Math.min(cur.val - pre.val, result);
    }
    pre = cur;
    cur = cur.right;
  }

  return result;
};