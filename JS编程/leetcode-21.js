/**
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function(l1, l2) {
  let l3 = new ListNode(0);
  let node = l3;
  while(l1 != null && l2!= null) {
    if (l1.val <= l2.val) {
      node.next = l1;
      l1 = l1.next
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    node = node.next;
  }

  if (l1 != null) {
    node.next = l1;
  } else {
    node.next = l2;
  }

  return l3.next;
};