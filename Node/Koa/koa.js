const Koa = require('./mykoa');
// const Koa = require('koa');

const app = new Koa();

app.use(function (ctx) {
  console.log(ctx.req.path);
  console.log(ctx.request.req.path);

  console.log(ctx.request.path);
  console.log(ctx.path);
  // ctx.body = {
  //   name: 'black'
  // };
});

app.listen(3000, () => {
  console.log('server start 3000');
});

app.on('error', function(error) {
  console.log(error);
});