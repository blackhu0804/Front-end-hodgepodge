/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 双指针
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let prev = null;
  let cur = head;

  while(cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};