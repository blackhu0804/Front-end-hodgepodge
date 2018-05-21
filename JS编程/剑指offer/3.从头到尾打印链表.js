/* 
    输入一个链表， 从尾到头打印链表每个节点的值。
*/  

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/


function printListFromTailToHead(head) {
    // write code here
    if(!head) {
        return []
    }

    let temp = [] // 用于存储链表
    while(head.next != null) {
        temp.unshift(head.val)
        head = head.next
    }
    temp.unshift(head.val)

    console.log(temp)
}
