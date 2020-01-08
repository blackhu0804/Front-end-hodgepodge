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