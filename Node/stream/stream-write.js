let fs = require('fs');
let path = require('path');

// 创建一个可写流对象
let ws = fs.createWriteStream(path.resolve(__dirname, '2.txt'), {
  flags: 'w',
  autoClose: true,
  start: 1,
  encoding: 'utf8',
  highWaterMark: 2 //期望的个数 默认写入16K
});

// 只能写入 string 或者 buffer
ws.write('hello');
ws.write('world');


ws.end('end'); // 关闭文件 => write + close
