let fs = require('fs');
let path = require('path');

// rs 可读流对象 可用于基本事件的方式来得到数据 异步解决方案
let myReadStream = require('./myReadStream');
// let rs = fs.createReadStream(path.resolve(__dirname, '1.txt'), {
let rs = new myReadStream(path.resolve(__dirname, '1.txt'), {
  flags: 'r', // r 代表的是读取
  highWaterMark: 2, // 以子节为单位
  start: 0,
  end: 4,
  autoClose: true
});

// 每次读取的结果
let arr = [];

rs.on('open', function (fd) {
  console.log('open', fd);
});

rs.on('data', function (data) {
  arr.push(data);
  console.log(arr);
  rs.pause(); // 暂停触发 data 事件
});

setInterval(() => {
  rs.resume(); // 恢复触发 data 事件
}, 1000);

rs.on('end', function () {
  console.log(Buffer.concat(arr).toString());
});

rs.on('close', function () {
  console.log('文件关闭');
});

rs.on('error', function (error) {
  console.log(error)
});