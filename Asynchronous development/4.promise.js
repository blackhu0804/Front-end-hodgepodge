/**
 * 4. Promise解决的问题
 * - 回调地狱
 * - 错误处理 
 */

const Promise = require('./myPromise.js');
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000)
});

promise.then(function (value) {
  console.log('success', value);
}, function (reason) {
  console.log('reason', reason);
})