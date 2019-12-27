/**
 * 1. Promise 3种状态 pending resolve reject
 * 2. resolve, reject 也是一个函数
 * 3. exector 会立即执行
 * 4. 每个promise都有一个then方法，then方法传递两个函数，一个代表成功执行的回调，一个代表失败的回调
 * 5. 状态变为成功或失败不能更改
 */
const PENDING = 'PENDING';
const RESOLVED = 'RESOLVED';
const REJECTED = 'REJECTED';
const resolvePromise = (promise2, x, resolve, reject) => {
  let called = false;
  if (promise2 === x) { // 死循环，报错
    return reject(new TypeError('Chaining cycle detected for Promise #<Promise>'));
  }

  // 判断x的类型是Promise还是普通值
  // 如果x不是对象也不是函数 string null undefined
  if ((typeof x == 'object' && x !== null) || typeof x === 'function') {
    try { // 有可能这个then方法在别人的promise中通过defineProperty定义的取值的时候可能会发生异常，那么就让这个promise2变成失败即可
      let then = x.then;
      if (typeof then === 'function') { // 如果有then函数说明他是一个promise
        then.call(x, (y) => { //解析y保证是一个普通值
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if(called) return;
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (error) {
      if(called) return;
      called = true;
      reject(error);
    }
  } else {
    resolve(x);
  }
};

class Promise {
  constructor(exector) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.onResolvedCallbacks = []; //存储成功的回调
    this.onRejectedCallbacks = []; //存储失败的回调
    let resolve = (value) => {
      if (value instanceof Promise) { // 如果resolve一个promise
        return value.then(resolve, reject);
      }
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
      }
    }

    let reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    }
    try {
      exector(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }

  then(onFulFilled, onRejected) {
    // 连续透传
    onFulFilled =  typeof onFulFilled === 'function' ? onFulFilled : val => {return val};
    onRejected =  typeof onRejected === 'function' ? onRejected : err => {throw err};

    let promise2 = new Promise((resolve, reject) => {
      if (this.status === RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        }, 0);
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        }, 0);
      }
      if (this.status === PENDING) {
        // 如果是异步将方法存到数组中
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFulFilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (error) {
              reject(error);
            }
          }, 0);
        });
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);  
            } catch (error) {
              reject(error); 
            }
          }, 0);
        });
      }
    })

    return promise2;
  }

  catch(errCallback) {
    return this.then(null, errCallback);
  }

  finally(callback) {
    return this.then((data) => {
      return Promise.resolve(callback).then(() => data);
    }, err => {
      return Promise.resolve(callback()).then(() => {throw err});
    });
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}

Promise.resolve = function (value) {
  return new Promise((resolve, reject) => {
    resolve(value);
  }) 
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => {
    reject(reason);
  }) 
}

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
module.exports = Promise;