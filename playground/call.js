// call 接受两个参数，第一个参数是在其中运行函数的作用域，第二个参数是一个参数列表，用于指定调用 func 时的参数。
// 与 apply 不同的是，call() 方法接受的是一个参数列表，而 apply() 方法接受的是一个参数数组。
// example
const obj = { name: 'Alice' };

const greet = function(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

greet.call(obj, 'Hello', '!'); // 输出: Hello, Alice!

Function.prototype.myCall = function (context, ...args) {
    context = context || window; // 如果没有传入 context，则默认为 window
    const fn = Symbol(); // 创建一个唯一的 Symbol 作为 context 的属性名
    context[fn] = this; // 将函数赋值给 context 的属性
    const result = context[fn](...args); // 执行函数
    delete context[fn]; // 删除临时的属性
    return result; // 返回执行结果
}

greet.myCall(obj, 'Hello', '!'); // 输出: Hello, Alice!