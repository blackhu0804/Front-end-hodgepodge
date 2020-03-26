/**
 * https://leetcode-cn.com/problems/symmetric-tree/submissions/
 * 
 *  思路：
 *  判断：左子树的左节点 === 右子树的右节点 && 左子树的右节点 === 右子树的左节点
 *  边界：如果 root 为空返回true
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true;
  return check(root.left, root.right);
};

function check(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;

  return check(left.left, right.right) && check(left.right, right.left) && left.val === right.val;
}