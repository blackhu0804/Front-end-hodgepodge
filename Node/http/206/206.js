const http = require('http');
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, '../index.html');
let total = fs.statSync(file).size;

http.createServer((req, res) => {
  // 获取 range 字段 Range:bytes=0-3
  // Content-Range: bytes 0-3/2381
  let range = req.headers['range'];
  console.log(range);
  if (range) {
    let [, start = 0, end] = range.match(/(\d*)-(\d*)/);
    res.setHeader("Content-Range", `bytes ${start}-${end}/${total}`);
    fs.createReadStream(file, {
      start: +start,
      end: +end
    }).pipe(res);
    console.log(start, end);
  } else {
    fs.createReadStream(file).pipe(res);
  }
}).listen(3000);