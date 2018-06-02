/* 
    输入一个链表， 反转链表后， 输出链表的所有元素。
*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    if(!pHead) {
        return 
    }

    let pre = null
    while (pHead) {
        next = pHead.next
        pHead.next = pre
        pre = pHead
        pHead = next
    }
    return pre
}
