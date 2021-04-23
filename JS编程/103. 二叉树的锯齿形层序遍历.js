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
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let result = [];

  let curLevel = [root];
  while (curLevel.length > 0) {
    const nextLevel = [];
    const curLevelVals = [];

    for (let node of curLevel) {
      curLevelVals.push(node.val);
      node.left && nextLevel.push(node.left);
      node.right && nextLevel.push(node.right);
    }

    result.push(curLevelVals);
    result.length % 2 === 0 && curLevelVals.reverse();
    curLevel = nextLevel;
  }

  return result;
};
