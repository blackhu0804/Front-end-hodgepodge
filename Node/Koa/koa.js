const Koa = require('./mykoa');
// const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

app.use(function (ctx) {
  // console.log(ctx.req.path);
  // console.log(ctx.request.req.path);

  // console.log(ctx.request.path);
  // console.log(ctx.path);

  // 可返回字符串、对象、流
  // ctx.body = {
  //   name: 'black'
  // };
  // ctx.body = fs.createReadStream('./package.json');
  ctx.body = undefined;
});

app.listen(3000, () => {
  console.log('server start 3000');
});

app.on('error', function(error) {
  console.log(error);
});