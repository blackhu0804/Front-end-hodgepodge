const Koa = require('koa');
const fs = require('fs');
const path = require('path');
// const bodyparser = require('koa-bodyparser');
// const static = require('koa-static');
const static = require('./plugins/koa-static');
const bodyparser = require('./plugins/bodyparser');

let app = new Koa();
app.use(bodyparser());
app.use(static(__dirname));
app.use(static(path.resolve(__dirname, '../')));

app.use(async (ctx, next) => {
  if (ctx.path === '/form' && ctx.method === 'GET') {
    ctx.set('Content-Type', 'text/html;charset=utf-8');
    ctx.body = fs.createReadStream(path.resolve(__dirname, 'index.html'));
  } else {
    await next();
  }
})

app.use(async (ctx, next) => {
  if (ctx.path === '/form' && ctx.method === 'POST') {
    ctx.body = ctx.request.body;
  }
})

app.use(async ctx => {

})
app.listen(3000);