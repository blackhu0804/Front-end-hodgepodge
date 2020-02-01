const Koa = require('koa');
const sleep = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sleep');
      resolve();
    }, time);
  })
}

const app = new Koa();

app.use(function (ctx, next) {
  console.log(1);
  next();
  console.log(2);
});

app.use( async function (ctx, next) {
  console.log(3);
  await sleep(2000);
  next();
  console.log(4);
});

app.use(function (ctx, next) {
  console.log(5);
  next();
  console.log(6);
});

app.listen(3000);