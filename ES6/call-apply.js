/**
 * call 特点：
 * 1. 改变this指向
 * 2. 可以让函数执行
 */
Function.prototype.call = function (thisValue, ...args) {
  if (typeof thisValue !== 'object') {
    thisValue = new Object(thisValue);
  }
  let context = this; // context 就是 fn
  thisValue.f = context; // 就是将当前this挂载到需要改变的this指向上
  thisValue.f(...args);
  delete thisValue.f;
}

function fn(...args) {
  console.log(this, ...args);
}

fn.call(1, 3, 5);


// apply 和 call 的区别主要在参数上， apply 可以传递数组
Function.prototype.apply = function (thisValue, args) {
  if (typeof thisValue !== 'object') {
    thisValue = new Object(thisValue);
  }
  let context = this; // context 就是 fn
  thisValue.f = context; // 就是将当前this挂载到需要改变的this指向上
  thisValue.f(args);
  delete thisValue.f;
}

function fn2() {
  console.log(this, arguments);
}
fn2.apply = function (params) {
  console.log('inner apply');
}

Reflect.apply(fn2, 1, [2, 3]);