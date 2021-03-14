Array.prototype.myFlat = function(n = 1) {
  let result = [...this];
  while (n > 0) {
    if (result.some(x => Array.isArray(x))) {
      result = [].concat.apply([], result);
    } else {
      break;
    }
    n--;
  }
  return result;
}

const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }];

// console.log(arr.myFlat(2))

// reduce 实现 flat
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};

console.log(flat(arr));