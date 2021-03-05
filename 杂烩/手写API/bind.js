Function.prototype.myBind = function(context, ...args) {
  if(typeof this !== 'function') {
    throw new Error('this is not a function');
  }

  let fn = this;
  let FNOP = function() {}

  let fBound = function() {
    return fn.call(this instanceof fBound ? this : context, ...args, ...arguments);
  }
  FNOP.prototype = fn.prototype;
  fBound.prototype = new FNOP();
  return fBound;
}

// let obj = {
//   name: 'black'
// }

// function sayName() {
//   console.log(this.name);
// }

// let fn = sayName.bind(obj);
// fn()

// let fn1 = sayName.myBind(obj);
// fn1()

var value = 2;

var foo = {
    value: 1
};

function bar(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}

var bindFoo = bar.myBind(foo, 'black');

var obj1 = new bindFoo('18');
