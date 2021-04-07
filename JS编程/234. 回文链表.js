/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 思路：
 *  利用快慢指针找到中点，并将后面的链表进行翻转，遍历比对两部分链表的内容是否相同
 */
 var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }

  let slow = new ListNode();
  let fast = new ListNode();

  slow = head;
  fast = head;

  while(fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let right = reverse(slow);

  while(right !== null) {
    if (head.val !== right.val) {
      return false;
    }
    head = head.next;
    right = right.next;
  }

  return true;
};


function reverse(head) {
  let pre = null;
  let cur = head;
  while(cur !== null) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}