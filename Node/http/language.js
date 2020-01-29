/**
 * 多语言
 * 1. 路径不同返回不同页面
 * 2. 前端多语言 设置不同json映射
 * 3. 后端国际化 异步请求 Accept-Language -> 
 */
const http = require('http');
const path = require('path');
const fs = require('fs');
const url = require('url');
const languages = {
  en: {
    message: 'hello world'
  },
  zh: {
    message: '你好 世界'
  }
}

const server = http.createServer((req, res) => {
  let lans = req.headers['accept-language'];
  let r = lans.split(',').map(language => {
    let [name, q] = language.split(';');
    let obj = {};
    obj.name = name;
    if (!q) {
      q = 'q=1';
    }
    obj.q = q.split('=')[1];
    return obj;
  }).sort( (a, b) => {
    return b.q - a.q;
  });

  for (let i = 0; i < r.length; i++) {
    let lan = languages[r[i].name];
    if (lan && lan.message) {
      return res.end(lan.message);
    }
  }
  return res.end('not found language');
});

server.listen(3000);