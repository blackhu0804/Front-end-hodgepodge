/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let l = new ListNode(0);
  l.next = head;
  let prev = l;
  while(head !== null) {
    if (head.val === val) {
      prev.next = head.next;
      head = head.next;
    } else {
      prev = head;
      head = head.next;
    }
  }

  return l.next;
};