Array.prototype.myFilter = function(fn, thisArgs) {
  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    console.log(Object.prototype.toString.call(fn))
    throw new Error('fn is not a funtion');
  }

  let arr = [];
  for (let i = 0; i < this.length; i++) {
    if (fn.call(thisArgs, this[i], i, this)) {
      arr.push(this[i]);
    }
  }

  return arr;
}

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.myFilter(word => word.length > 6);

console.log(result);