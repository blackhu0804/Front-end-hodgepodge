/**
 * 1. 
 */
Function.prototype.call2 = function(context) {
    context = context || window
    context.fn = this;

    var args = [...arguments].slice(1)
    var result = context.fn(...args)
    delete context.fn()
    return result
}

var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'black', 18));