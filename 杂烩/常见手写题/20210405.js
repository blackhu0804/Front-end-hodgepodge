// 1. flatten 数组扁平化
function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}

function flatten1(arr) {
  while(arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }
  return arr;
}

// console.log(flatten([1, 2, [3, 4], [5, [6, 7]]]));
// console.log(flatten1([1, 2, [3, 4], [5, [6, 7]]]));

// 2. 数组的 map 方法
Array.prototype.myMap = function(callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError('can not read property map of null or undefined');
  }

  if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
    throw new TypeError('callback is not a function');
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callbackFn.call(thisArg, this[i], i, this);
    }
  }

  return result;
}

// console.log([1, 2, 3].myMap((item, index) => item * 2 + index));

// 3. 数组的 filter 方法
Array.prototype.myFilter = function(callbackFn, thisArg) {
  if (this === null || this === undefined) {
    throw new TypeError('can not read property map of null or undefined');
  }

  if (Object.prototype.toString.call(callbackFn) !== '[object Function]') {
    throw new TypeError('callback is not a function');
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callbackFn.call(thisArg, this[i], i, this)) {
        result.push(this[i]);
      }
    }
  }

  return result;
}

// console.log([1, 2, 3].filter((item, index) => item % 2 === 0 && index > 0));

// 4. bind 实现
Function.prototype.mybind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new Error('this is not a function');
  }

  let self = this;

  let fBound = function() {
    self.apply(this instanceof fBound ? this : context, args.concat(Array.prototype.slice.call(arguments)));
  }

  fBound.prototype = Object.create(this.prototype);
  return fBound;
}

// 5. call 实现
Function.prototype.myCall = function(context) {
  context = context || window;
  context.fn = this;

  let result = context.fn(...arguments);
  delete context.fn;

  return result;
}

// let obj = {
//   a: 1
// }

// function sayHello() {
//   console.log(obj.a);
// }

// sayHello.call(obj);

// 6. 深拷贝
function deepClone1(obj) {
  /** 
   * 存在的问题
   *  1. 循环引用
   *  2. 无法拷贝特殊的对象，如 正则、日期 
   *  3. 无法拷贝函数、undefined、symbol ，转换后这个键值对小事
   *  4. 无法拷贝对象的原型链
   *  5. NaN、Infinity 变成 null
   **/
  return JSON.parse(JSON.stringify(obj));
}

function deepClone2(obj) {
  /**
   * 不能复制不可枚举属性和 Symbol
   * 只能对普通的引用类型做递归复制
   * 循环引用没解决
   */
  let cloneObj = {};
  for(let key in obj) {
    if (typeof obj[key] === 'object') {
      cloneObj[key] = deepClone2(obj[key]);
    } else {
      cloneObj[key] = obj[key];
    }
  }

  return cloneObj;
}

const isComplexDataType = obj => {
  return (typeof obj === 'object' || typeof obj === 'function') && obj !== null;
}  

function deepClone3(obj, hash = new WeakMap()) {
  if (obj.constructor === Date) return new Date(obj);
  if (obj.constructor === RegExp) return new RegExp(obj);

  // 如果存在循环引用直接返回
  if (hash.has(obj)) return hash.get(obj);

  let allDesc = Object.getOwnPropertyDescriptors(obj);
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc);

  hash.set(obj, cloneObj);
  for (let key of Reflect.ownKeys(obj)) {
    console.log(obj[key])
    cloneObj[key] = (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ? deepClone3(obj[key], hash) : obj[key];
  }

  return cloneObj;
}

let obj = {
  a: 1,
  hello: function() {
    console.log('hello');
  },
  date: new Date(),
  Symbol: Symbol(2),
  undefined: undefined
}

Object.defineProperty(obj, 'a', {
  enumerable: false
})

// console.log(deepClone2(obj));
// console.log(deepClone3(obj));
// console.log(Reflect.ownKeys(deepClone3(obj))); // 包含不可枚举属性 a 说明正常拷贝了

// 7. 实现一个js函数，满足先开始显示红色3秒、然后显示黄色1秒，最后显示绿色2秒，进行循环；
function sleep(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, time)
  })
}
async function show() {
  await sleep(3000);
  console.log('red');
  await sleep(1000);
  console.log('yellow');
  await sleep(2000);
  console.log('green');
  show();
}
// show();

//  8. 数据存储
/**
 * 基本数据类型存储在栈中
 * 引用数据类型存储在堆中
 * 闭包变量存储在堆中
 */

// 9. 继承
function Parent1() {
  this.name = "parent";
}

function Child1() {
  Parent1.call(this);
  this.age = 18;
}

console.log(new Child1());
/**
 * 方法不能继承
*/

// 借助原型链
function Parent2() {
  this.name = 'parent';
}

Parent2.prototype.sayName = function() {
  console.log(this.name);
}

function Child2() {
  this.age = 18
}

Child2.prototype = new Parent2();
// let c2 = new Child2();
// console.log(c2);
// c2.sayName();

/**
 * 缺点：
 *  修改原型上的属性，其他的实例也会被修改
 */

// 组合继承
function Parent3 () {
  this.name = 'parent3';
  this.play = [1, 2, 3];
}
function Child3() {
  Parent3.call(this);
  this.type = 'child3';
}

Child3.prototype = new Parent3();
/**
 * 缺点：
 *  构造函数执行两次
 */

// 组合继承优化
function Parent4() {
  this.name = 'parent4';
  this.play = [1, 2, 3];
}

function Child4() {
  Parent4.call(this);
  this.age = 18;
}

Child4.prototype = Object.create(Parent4.prototype);
Child4.prototype.constructor = Child4;

// 10. new 实现
function myNew(constructor, ...args) {
  let obj = {};

  obj.__proto__ = constructor.prototype;

  let result = constructor.apply(obj, args);

  return typeof result === 'object' ? result : obj;
}

// 11. curry
function add(a, b) {
  return a + b;
}

function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : (..._args) => curry(fn, ...args, ..._args);
}
