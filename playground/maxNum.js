// 最大值
const maxNum = (arr) => {
    return arr.reduce((acc, cur) => acc > cur ? acc : cur);
}

console.log(maxNum([1, 3, 5, 22, 12]))

