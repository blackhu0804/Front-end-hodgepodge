const http = require('http');
const fs = require('fs');

http.get({
  host: 'localhost',
  port: 3000,
  path: '/img/1.jpeg',
  headers: {
    'referer': 'http://black:3000'
  }
}, function (res) {
  res.pipe(fs.createWriteStream('2.jpg'));
});