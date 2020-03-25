/**
 * 1. 创建一个新对象
 * 2. 设置原型链
 * 3. 将 this 指向新创建的对象, 并将构造函数的参数传递给新对象
 * 4. 返回这个新对象
 */

function _new(Fn, ...args) {
  // 创建一个空对象，继承于 Fn.prototype
  let obj = Object.create(Fn.prototype);
  // 让 this 指向新创建的对象，并执行获取返回值 result
  let result = Fn.call(obj, ...args);
  // 如果构造函数返回一个对象，那么直接 return 它，否则返回内部创建的新对象
  return result instanceof Object ? result : obj;
}

function A () {
  this.a = 1;
  return {b: 1};
}

console.log(new A());
console.log(_new(A));

function B () {
  this.a = 1;
  return 1;
}

console.log(new B());
console.log(_new(B));