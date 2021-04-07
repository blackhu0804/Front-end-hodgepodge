/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var sortList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }
  let slow = head;
  let fast = head;
  let preSlow = head;
  while(fast.next !== null && fast.next.next !== null) {
    preSlow = slow;
    fast = fast.next.next;
    slow = slow.next;
  }
  preSlow.next = null;
  const l = sortList(head);
  const r = sortList(slow.next);
  return mergeList(l, r);
};

function mergeList(l1, l2) {
  let dummy = new ListNode(0);

  let prev = dummy;
  while(l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 ? l1 : l2;
  return dummy.next;
}