// 函数柯里化
function add(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn, ...args) {
  if (fn.length === args.length) {
    return fn(...args);
  } else {
    return function(...values) {
      let newArgs = [...args, ...values];
      return curry(fn, ...newArgs);
    }
  }
}

let fn = curry(add, 1, 2);
let newFn = fn(3);
console.log(newFn(4));


// 反柯里化 让一个函数的应用范围变得更广一些
function unCurrying(fn) {
  return function (thisValue, ...args) {
    return Function.prototype.apply.call(fn, thisValue, ...args);
    // return fn.call(...args);
  }
}

let toString = unCurrying(Object.prototype.toString);
console.log(toString('hello'));