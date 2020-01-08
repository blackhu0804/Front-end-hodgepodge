// const co = require('co');
const fs = require('fs').promises;

/**
 * name.txt 内容为下一个文件的文件名
 */
function *read() {
  try {
    let content = yield fs.readFile('name.txt', 'utf8');
    let age = yield fs.readFile(content, 'utf8');
    return age;
  } catch (error) {
    console.log(error);
  }
};

co(read()).then(data => {
  console.log(data);
});

function co(it) {
  return new Promise((resolve, reject) => {
    function next(val) { // 异步迭代需要借助next函数
      let {value, done} = it.next(val);
      if (done) { //如果迭代完成， 将结果resolve返回
        resolve(value);
      } else {
        // 防止yield的值不是promise
        Promise.resolve(value).then(y => {
          next(y); // 当第一个promise执行完毕后，继续迭代下一个
        }, reject);
      }
    }
    next();
  })
}