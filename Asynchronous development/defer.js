let Promise = require('./myPromise');

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(new Promise((resolve, reject) => {
      resolve('ok');
    }));
  }, 1000);
});

p.then(data => {
  console.log(data);
})