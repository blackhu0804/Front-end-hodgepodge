Array.prototype.reduceArr = function(fn, initValue) {
	if (Object.prototype.toString.call(fn) !== '[object Function]') {
  	throw new Error('fn is not a function');
  }
  
  let initIndex = arguments.length === 1 ? 1 : 0;
  let acc = arguments.length === 1 ? this[0] : initValue;
  for (let i = initIndex; i < this.length; i++) {
  	acc = fn(acc, this[i], i, this);
  }
  
  return acc;
}

let arr = [1, 2, 3, 4, 5];

let res = arr.reduceArr((pre, cur) => {
  return pre + cur;
})

console.log(res);