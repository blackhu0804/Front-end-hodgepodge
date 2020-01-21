const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

let server = http.createServer();

server.on('request', function (req, res) {
  // 路由 根据不同路径 返回不同结果
  let {pathname} = url.parse(req.url);
  // 实现一个静态服务
  let absFilePath = path.join(__dirname, pathname);

  fs.stat(absFilePath, function (err, statObj) {
    if (err) {
      res.statusCode = 404;
      return res.end('Not Found');
    }

    if (statObj.isDirectory()) {
      // 是一个目录
      let homePage = path.join(absFilePath, 'index.html');
      fs.access(homePage, function (err, data) {
        if (err) {
          res.statusCode = 404;
          return res.end('Not Found');
        } else {
          res.setHeader('Content-Type', 'text/html;charset=utf8');
          fs.createReadStream(homePage).pipe(res);
        }
      })
    } else {
      res.setHeader('Content-Type', mime.getType(absFilePath)+';charset=utf8');
      fs.createReadStream(absFilePath).pipe(res);
    }
  });
});

server.listen(3000, function() {
  console.log('server start port: 3000');
});