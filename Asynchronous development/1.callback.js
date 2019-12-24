/**
 * 异步发展流程
 * 1. callback 回调函数
 * 获取姓名和年龄，没有相依赖的关系，可以同时读取，但不清楚什么时候两个都读取完
 * 如何处理？
 */
const fs = require('fs');

function after(callback, times) {
  let arr = [];
  return function (data) {
    arr.push(data);
    if(--times === 0) {
      callback(arr);
    }
  }
}

let add = after(fn, 2)

function fn (arr) {
  console.log(arr);
}

fs.readFile('./Asynchronous development/name.txt', 'utf8', function (err, data) {
  add(data);
})
fs.readFile('./Asynchronous development/age.txt', 'utf8', function (err, data) {
  add(data);
})