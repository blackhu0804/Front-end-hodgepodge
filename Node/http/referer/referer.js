/**
 * 防盗链 referer
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const whilteList = [
  'black:3000'
]

const server = http.createServer((req, res) => {
  // 针对图片类型进行防盗链处理
  const {pathname, query} = url.parse(req.url, true);
  const absPath = path.join(__dirname, pathname);

  fs.stat(absPath, function(err, statObj) {
    if (err) {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }

    if (statObj.isFile()) {
      // 图片添加防盗链处理
      if (/(\.png)|(\.jpg)|(\.jpeg)/.test(absPath)) {
        // 先看有没有referer
        let referer = url.parse(req.headers['referer'] || req.headers['referrer']).host;
        if (referer) {
          // 需要获取到用户的 referer 和用户的 host 去比对
          let hostname = req.headers['host'];
          if (hostname !== referer && !whilteList.includes(referer)) {
            // 如果不一样，属于盗用本服务图片
            let errorFile = path.join(__dirname, 'img/err.png');
            return fs.createReadStream(errorFile).pipe(res);
          }
        }
      }

      fs.createReadStream(absPath).pipe(res);
    } else {
      res.statusCode = 404;
      res.end('Not Found');
      return;
    }
  });
});

server.listen(3000);