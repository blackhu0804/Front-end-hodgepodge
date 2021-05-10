// 1. apply
Function.prototype.myApply = function(context, arr) {
  context = context || window;
  context.fn = this;

  let result;
  if (!arr) {
    result = context.fn();
  } else {
    let args = [];
    for (let i = 0; i < arr.length; i++) {
      args.push(`${arr[i]}`);
    }
    result = eval(`context.fn(${arr})`);
  }

  
  delete context.fn;
  return result;
}

var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.myApply(array, elements);
// console.info(array); // ["a", "b", 0, 1, 2]

// reduce
Array.prototype.myReduce= function(fn, initVal) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new Error('fn is not a function');
  }

  let arr = this;
  initVal = arguments.length === 1 ? initVal : arr[0];
  let i = arguments.length === 1 ? 1 : 0;
  while(i < arr.length) {
    initVal = fn(initVal, arr[i], i, arr);
    i++;
  }

  return initVal;
}

let arr = [1, 2, 3];
let sum = arr.myReduce((pre, cur) => {
  return pre + cur;
});
// console.log(sum);

/**
 * 继承
 */
function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function() {
  console.log(this.name, this.age);
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

let child = new Child('black', '18');
// child.getName();

/**
 * bind
 */
Function.prototype.myBind = function(context, ...args) {
  if (Object.prototype.toString.call(this) !== '[object Function]') {
    throw new Error('this is not a function');
  }

  let self = this;
  let fBound = function() {
    self.apply(this instanceof fBound ? this : context, [...arguments, ...args]);
  }

  fBound.prototype = Object.create(this.prototype);
  return fBound;
}


/**
 * new
 */
function myNew(constructor, ...args) {
  let obj = {};

  obj.__proto__ = Object.create(constructor.prototype);

  let result = constructor.apply(obj, args);

  return typeof result === 'object' ? result : obj;
}

/**
 * curry
 */
const curry = (fn, ...args) => {
  return args.length >= fn.length ?
    fn(...args)
    : (..._args) => curry(fn, ...args, ..._args);
}

function add1(x, y, z) {
  return x + y + z;
}
let add = curry(add1);
console.log(add(1, 2, 3));
console.log(add(1)(2)(3));
console.log(add(1, 2)(3));
console.log(add(1)(2, 3));