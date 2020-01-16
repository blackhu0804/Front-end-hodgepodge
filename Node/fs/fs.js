/**
 * example ：
 *  读大文件
 */
const fs = require('fs');

// fs.readFile 不能控制读取速度 也不能控制读取部分
// r 读取 w 写入  w+ 以写为准 r+ 以读为准
// fs.open('./1.txt', 'r', 0o666, function (err, fd) {
//   let buffer = Buffer.alloc(5);
//   // fd 文件描述符
//   // buffer 表示写入的数据
//   // 0 表示从buffer的第0个开始写入
//   // 5 表示写入的个数
//   // 0 表示从文件的哪个位置开始读取
//   fs.read(fd, buffer, 0, 5, 0, function (err, bytesRead) { // bytesRead 真正读取的个数
//     console.log(bytesRead);
//   });
// });

// fs.open('./2.txt', 'w', function (err, fd) {
//   let buffer = Buffer.from('black');
//   fs.write(fd, buffer, 0, 5, 0, function (err, written) {
//     console.log(written);    
//   });
// })

fs.open('./1.txt', 'r', function (err, fd) {
  if (err) {
    return console.log(err);
  }
  fs.open('./2.txt', 'w', function (err, wfd) {
    let BUFFER_SIZE = 5;
    let buffer = Buffer.alloc(BUFFER_SIZE);
    let readOffset = 0;
    let writeOffset = 0;

    function next() {
      fs.read(fd, buffer, 0, BUFFER_SIZE, readOffset, function (err, bytesRead) {
        readOffset += bytesRead;

        if (bytesRead === 0) {
          fs.close(fd, () => {});
          fs.close(wfd, () => {})
        } else {
          fs.write(wfd, buffer, 0, bytesRead, writeOffset, function (err, written) {
            writeOffset += written;
            next();
          })
        }
      })
    }
    next();
  })
});