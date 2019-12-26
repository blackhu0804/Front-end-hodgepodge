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
  if (promise2 === x) { // 死循环，报错
    return reject(new Error('Chaining cycle detected for Promise #<Promise>'));
  }
  // 判断x的类型是Promise还是普通值
  // 如果x不是对象也不是函数 string null undefined
  let called;
  if ((typeof x == 'object' && x !== null) || typeof x === 'function') {
    try { // 有可能这个then方法在别人的promise中通过defineProperty定义的取值的时候可能会发生异常，那么就让这个promise2变成失败即可
      let then = x.then;
      if (typeof then === 'function') { // 如果有then函数说明他是一个promise
        then.call(x, (y) => { //解析y保证是一个普通值
          if (called) {
            return;
          }
          called = true;
          resolvePromise(promise2, y, resolve, reject);
        }, r => {
          if(called) {
            return;
          }
          called = true;
          reject(r);
        });
      } else {
        resolve(x);
      }
    } catch (error) {
      if(called) {
        return;
      }
      called = true;
      reject(e);
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
    this.onResolveCallbacks = []; //存储成功的回调
    this.onRejectedCallbacks = []; //存储失败的回调
    let resolve = (value) => {
      if (this.status === PENDING) {
        this.status = RESOLVED;
        this.value = value;
        this.onResolveCallbacks.forEach(fn => fn());
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
    onFulFilled =  typeof onFulFilled === 'function' ? onFulFilled : val => val;
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
        }, 0)
      }
      if (this.status === REJECTED) {
        try {
          let x = onRejected(this.reason);
          resolvePromise(promise2, x, resolve, reject);
        } catch (error) {
          reject(error);
        }
      }
      if (this.status === PENDING) {
        // 如果是异步将方法存到数组中
        this.onResolveCallbacks.push(() => {
          try {
            let x = onFulFilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);  
          } catch (error) {
            reject(error); 
          }
        });
      }
    })

    return promise2;
  }
}

Promise.defer = Promise.deferred = function () {
  let dfd = {};
  dfd.Promise = new Promise((resolve, reject) => {
    dfd.resolve = resolve;
    dfd.reject = reject;
  })
  return dfd;
}
module.exports = Promise;