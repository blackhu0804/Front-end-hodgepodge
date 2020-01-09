/**
 * 1. 链表
 */

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  append(element) {
    let node = new Node(element);
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  
  removeAt(idx) {
    let i = 0;
    let current = this.head; // 从头开始找
    let prev = null;
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      while (i++ < idx) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
    this.length--;
  }

  insertAt(idx, element) {
    let node = new Node(element);
    if (idx === 0) {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    } else {
      let i = 0;
      let current = this.head;
      let prev = null;
      while (i++ < idx) {
        prev = current;
        current = current.next;
      }
      prev.next = node;
      node.next = current;
    }
    this.length++;
  }
}

let ll = new LinkList();
ll.append(3);
ll.append(4);
ll.append(5);

ll.removeAt(1);
ll.insertAt(1, 100);

console.dir(ll, {
  depth: 1000
})