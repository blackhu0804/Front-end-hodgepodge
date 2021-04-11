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
console.info(array); // ["a", "b", 0, 1, 2]
