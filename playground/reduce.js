// reduce
// reduce 方法对数组中的每个元素执行一个由您提供的 reducer 函数，每一次运行 reducer 会将先前元素的计算结果作为参数传入，最终将其结果汇总为单个返回值。
// 接收两个参数，第一个参数是一个函数，第二个参数是初始值

// example
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0)
console.log(sum); // 15

Array.prototype.myReduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    const array = this;
    let acc = initialValue;
    let start = 0;
    if (acc === undefined) {
        acc = array[0];
        start = 1;
    }
    for (let i = start; i < array.length; i++) {
        acc = callback(acc, array[i]);
    }
    return acc;
}

const sumMyReduce = arr.myReduce((acc, cur) => {
    return acc + cur;
}, 0)
console.log(sumMyReduce); // 15