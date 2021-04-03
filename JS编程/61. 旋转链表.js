/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || head.next === null) {
    return head;
  }

  let len = 0;
  let l = new ListNode(0);
  l.next = head;
  while(l.next) {
    len++;
    l = l.next
  }

  k = k % len;
  if (k === 0) return head;
  let slow = head;
  let fast = head;
  while(k--) {
    fast = fast.next;
  }

  while(fast && fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  let r = slow.next;
  slow.next = null;
  fast.next = head;

  return r;
};