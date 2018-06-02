/* 
    输入一个链表， 输出该链表中倒数第k个结点。
*/

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindKthToTail(head, k) {
    // write code here
    if(!head) {
        return 
    }
    let arr = []
    while (head) {
        arr.push(head)
        head = head.next
    }

    arr = arr.reverse()
    return arr[ k - 1]
}