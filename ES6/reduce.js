// reduce 收敛函数

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce(function (prev, next, currentIndex, arr) {
  return prev + next;
});

console.log(result);


let obj = [
  {score: 100},
  {score: 200}
];

let result2 = obj.reduce((prev, next, currentIndex, arr) => {
  if (arr.length - 1 === currentIndex) {
    return (prev + next.score) / arr.length;
  }
  return prev + next.score;
}, 0);

console.log(result2);

/**
 * 数组扁平化的应用
 */
function flatten(arr) {
  return arr.reduce((prev, next, currentIndex, arr) => {
    if (Array.isArray(next)) {
      return prev.concat(flatten(next));
    } else {
      prev.push(next);
    }
    return prev;
  }, []);
}
let flatArr = [1, [2, 3, [4, [5]]]];
let resultArr = flatten(flatArr);
console.log(resultArr);

/**
 * 数组合并成对象
 */
let keys = ['name', 'age'];
let values = ['black', '18'];
let result3 = keys.reduce((prev, current, index) => {
  prev[current] = values[index];
  return prev;
}, {});

console.log(result3);

/**
 * compose 将多个函数组合成一个函数
 */
function compose(...fns) {
  return fns.reduce(function (prev, next) {
    return function (...values) {
      return prev(next(...values));
    }
  });
}