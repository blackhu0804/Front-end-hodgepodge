// flat 
// 接收一个参数，表示要展开的层数，默认为 1

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6]

Array.prototype.myFlat = function (depth = 1) {
    if (depth < 1) {
        return this.slice();
    }
    return this.reduce(( acc, cur) => {
        return acc.concat(Array.isArray(cur) ? cur.myFlat(depth - 1) : cur);
    }, [])
}

console.log(arr.myFlat(2)); // [1, 2, 3, 4, 5, 6]