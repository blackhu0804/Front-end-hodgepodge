/**
 * https://leetcode-cn.com/problems/reverse-linked-list/
 * 
 * 思路：
 * 1. 初始化一个null节点
 * 2. 首先将 cur.next 保存 做记录
 * 3. 将 cur 做反转将 next 指向 pre
 * 4. 将 cur 反转后的链表赋值给 pre
 * 5. cur 继续向下迭代
 * 
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
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let cur = head;
  let pre = null;
  while(cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }

  return pre;
};