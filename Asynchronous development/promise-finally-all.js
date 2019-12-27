/**
 * Promise finally 实现 
 */
Promise.prototype.finally = function (callback) {
  // finall 本质上就是一个then 方法
  return this.then(data => Promise.resolve(callback).then(() => data), err => Promise.resolve(callback()).then(() => {throw err}));
}

/**
 * Promise all 实现
 */
const isPromise = function (value) {
  return typeof value.then === 'function';
}

Promise.all = function (promises) {
  return new Promise((resolve, reject) => {
    let resultArr = [];
    let idx = 0;
    const processData = (data, i) => {
      resultArr[index] = data;
      if (++idx === promises.length) {
        resolve(resultArr);
      }
    }

    for(let i = 0; i < promises.length; i++) {
      let currentValue = promises[i];
      if (isPromise(currentValue)) {
        currentValue.then(data => {
          processData(data, i);
        }, reject)
      } else {
        processData(currentValue, i);
      }
    }
  })
}

Promise.race = function (promises) {
  return new Promise(function (resolve, reject) {
    for(let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        return resolve(value);
      }, err => {
        return reject(err);
      })
    }
  })
}