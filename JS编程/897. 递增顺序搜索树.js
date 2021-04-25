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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let res = [];
  dfs(root, res);

  let newTree = new TreeNode(-1);
  let cur = newTree;
  for(let value of res) {
    cur.right = new TreeNode(value);
    cur = cur.right;
  }

  return newTree.right;
};

function dfs(node, res) {
  if (node === null) return;

  dfs(node.left, res);
  res.push(node.val);
  dfs(node.right, res);
}