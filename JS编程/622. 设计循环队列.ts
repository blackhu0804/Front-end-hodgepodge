/**
 * 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。

  循环队列的一个好处是我们可以利用这个队列之前用过的空间。在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。

  你的实现应该支持如下操作：

  MyCircularQueue(k): 构造器，设置队列长度为 k 。
  Front: 从队首获取元素。如果队列为空，返回 -1 。
  Rear: 获取队尾元素。如果队列为空，返回 -1 。
  enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
  deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
  isEmpty(): 检查循环队列是否为空。
  isFull(): 检查循环队列是否已满。
 */
class MyCircularQueue {
  private data: number[];
  private tail: number;
  private head: number;
  private size: number;

  constructor(k: number) {
    this.data = new Array(k);
    this.tail = -1;
    this.head = -1;
    this.size = k;
  }

  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    if (this.isEmpty()) {
      this.head = 0;
    }

    this.tail = (this.tail + 1) % this.size;
    this.data[this.tail] = value;
    return true;
  }

  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    if (this.tail === this.head) {
      this.tail = -1;
      this.head = -1;
      return true;
    }

    this.head = (this.head + 1) % this.size;
    return true;
  }

  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.head];
  }

  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }

    return this.data[this.tail];
  }

  isEmpty(): boolean {
    console.log(this.head);
    return this.head === -1;
  }

  isFull(): boolean {
    return (this.tail + 1) % this.size === this.head;
  }
}