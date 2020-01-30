const http = require('http');
const fs = require('fs');
// 监听用户输入 p 暂停
let flowing = true;
process.stdin.on('data', function(chunk) {
  if (chunk.toString().includes('p')) {
    flowing = false;
  } else {
    if (!flowing) {
      flowing = true;
      download();
    }
  }
});

let ws = fs.createWriteStream('./download.txt');
let start = 0;
function download() {
  let end = start + 5;
  http.get({
    host: 'localhost',
    port: 3000,
    method: 'get',
    headers: {
      Range: `bytes=${start}-${end - 1}`
    }
  }, (res) => {
    console.log(res.headers);
    let total = res.headers['content-range'].split('/')[1];
    res.on('data', (chunk) => {
      ws.write(chunk);
      if (total > end && flowing) {
        setTimeout(() => {
          start += 5;
          download();
        }, 1000)
      } else {
        ws.end(); // 结束关闭
      }
    });
  });
}
download();