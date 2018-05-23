/*
    用两个栈来实现一个队列，完成队列的Push和Pop操作。
    队列中的元素为int类型。
*/
/* 
    实现之前先考虑栈是先进后出
    队列是先进先出
    举个例子 一个数组[1, 2, 3, 4, 5]
    push进栈
    最终是[1, 2, 3, 4, 5]
    如果是 栈的pop, 最终返回[5, 4, 3, 2, 1]
    push进队列
    队列的 pop， 最终应该返回[1, 2, 3, 4, 5]

    所以思路就是第二栈逆置第一个栈元素顺序， 然后自然pop()
    先手写一个简易版栈
*/
function Stack() {
    this.items = []
}

Stack.prototype = {
    constructor: Stack,
    push: function (data) {
        this.items.push(data)
        return this.items
    },
    pop: function (data) {
        return this.items.pop()
    },
    length: function () {
        return this.items.length
    },
    print: function () {
        console.log(this.items)
    }
}

var stack1 = new Stack()
var stack2 = new Stack()

function push(data) {
    stack1.push(data)
}

function pop() {
    if (stack2.length() == 0) {
        while (stack1.length() != 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop()
}
