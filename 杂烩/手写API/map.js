Array.prototype.myMap = function(fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw ('fn must funciton');
  }

  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(fn.call(thisArgs, this[i], i, this));
  }
  return arr;
}

let arr = [1, 2, 3, 4, 5];

console.log(arr.myMap((i) => {
  return i * 2;
}))