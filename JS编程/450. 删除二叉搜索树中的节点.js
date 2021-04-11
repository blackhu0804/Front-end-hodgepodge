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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
  if (root === null) return null;
  if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.left && root.right === null) {
      root = root.left;
    } else if (root.left === null && root.right) {
      root = root.right;
    } else {
      let last = root.left;
      while(last.right) {
        last = last.right;
      }
      root.val = last.val;
      root.left = deleteNode(root.left, last.val);
    }
  }

  return root;
};