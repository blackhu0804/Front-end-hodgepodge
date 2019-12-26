/**
 * 4. Promise解决的问题
 * - 回调地狱
 * - 错误处理 
 */

const Promise = require('./myPromise.js');
let promise = new Promise(function (resolve, reject) {
  // setTimeout(() => {
  //   resolve(1);
  // }, 1000)
  resolve(100);``
});

promise.then().then().then(data => {
  console.log(data);
})

// let promise2 = promise.then(() => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('成功');
//     }, 1000);
//   })
// });


// promise2.then((data) => {
//   console.log('success', data);
// }, err => {
//   console.log(err);
// });


// promise.then(function (value) {
//   console.log('success', value);
// }, function (reason) {
//   console.log('reason', reason);
// })