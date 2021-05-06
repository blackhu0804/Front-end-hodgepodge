/**
 * bind
 */
Function.prototype.myBind = function(context) {
  let self = this;
  let args = Array.prototype.slice.call(arguments, 1);

  let fBound = function() {
    self.apply(this instanceof fBound ? this : context, [...args, ...arguments])
  }
  fBound.prototype = Object.create(this.prototype);
  return fBound;
}

let value = 2;
let foo = {
    value: 'foo'
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';

let bindFoo = bar.myBind(foo, 'Jack');
let obj = new bindFoo(20);
// undefined
// Jack
// 20

obj.habit;
// shopping

obj.friend;
// kevin

/**
 * call
 */
console.log('====call=====');
Function.prototype.myCall = function(context, ...args) {
  context = context || window;
  context.fn = this;

  let result = context.fn(...args);
  delete context.fn;
  return result;
}

bar.myCall(foo, 'black', 18);

/**
 * apply
 */
console.log('=====apply=====');
Function.prototype.myApply = function(context, args) {
  context = context || window;
  context.fn = this;
  
  let result;
  if (args.length === 0) {
    result = context.fn();
  } else {
    result = context.fn(...args);
  }

  delete context.fn;
  return result;
}
bar.myApply(foo, ['black', 18])


/**
 * new
 */
console.log('=====new=====')
function myNew(Constructor, args) {
  let obj = {};

  obj.__proto__ = Constructor.prototype;

  let result = Constructor.apply(obj, args);

  return typeof result === 'object' ? result : obj;
}

function Person() {
  this.name = 'black';
}
let p = myNew(Person);
console.log(p);

/**
 * curry
 */
console.log('====curry=====')
const curry = (fn, ...args) => {
  return args.length >= fn.length ?
    fn(...args) : (..._args) => curry(fn, ...args, ..._args);
}

function add1(x, y, z) {
  return x + y + z;
}
let add = curry(add1);
console.log(add(1, 2, 3));

/**
 * map
 */
console.log('=====Map=====');
Array.prototype.myMap = function(fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new Error('fn is not a funciton');
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn.call(thisArgs, this[i], i, this));
  }

  return result;
}

console.log([1, 2, 3].myMap(i => i+1));

/**
 * filter
 */
console.log('=====Filter=====');
Array.prototype.myFilter = function(fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new Error('fn is not a funciton');
  }

  let result = [];
  for (let i = 0; i < this.length; i++) {
  if (fn.call(thisArgs, this[i], i, this)) {
    result.push(this[i]);
  }
  }

  return result;
}
console.log([-1, 2, 3].myFilter(i => i > 0));

/**
 * reduce
 */
console.log('====reduce====');
Array.prototype.myReduce = function(fn, initValue) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new Error('fn is not a funciton');
  }

  let initIndex = arguments.length > 1 ? 0 : 1;
  let acc = arguments.length > 1 ? initValue : this[0];
  for(let i = initIndex; i < this.length; i++) {
    acc = fn(acc, this[i], i, this);
  }

  return acc;
}
console.log([1, 2, 3].myReduce((pre, cur) => {
  return pre + cur;
}, 10));

/**
 * 数组去重
 */
console.log('=====数组去重=====');
function unique(arr) {
  let obj = {};
  return arr.filter((item) => {
    return obj[typeof item + JSON.stringify(item)] ? false : obj[typeof item + JSON.stringify(item)] = true;
  })
}

console.log(unique([null, 0, undefined, '0', 1, '1', 2, 2]));