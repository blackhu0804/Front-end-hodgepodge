// bind
// bind() 方法创建一个新的函数，在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。
// example
const obj = { name: 'Alice' };

const greet = function(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}

const greetAlice = greet.bind(obj, 'Hello');


greetAlice('!'); // 输出: Hello, Alice!

Function.prototype.myBind = function (context, ...args) {
    const fn = this;
    return function(...newArgs) {
        return fn.apply(context, args.concat(newArgs))
    }
}

const greetAliceMybind = greet.myBind(obj, 'Hello');

greetAliceMybind('!');