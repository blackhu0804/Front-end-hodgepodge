/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;

  let l1 = headA;
  let headAarr = [];
  while(l1) {
    headAarr.push(l1);
    l1 = l1.next;
  }

  let l2 = headB;
  while(l2) {
    if (headAarr.includes(l2)) {
      return l2;
    }
    l2 = l2.next;
  }
};
