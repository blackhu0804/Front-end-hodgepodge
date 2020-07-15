class MinStack {
  private data: any[];
  constructor() {
    this.data = [];
  }

  push(x: number): void {
    this.data.push(x);
  }

  pop(): void {
    return this.data.pop();
  }

  top(): number {
    return this.data[this.data.length - 1];
  }

  getMin(): number {
    return Math.min(...this.data);
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */