let newRace = function (promises) {
  if (!Array.isArray(promises)) {
    throw new Error("promises is not array");
  }

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(
        (value) => {
          resolve(value);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

newRace([promise1, promise2]).then((value) => {
  console.log(value);
});

var p3 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 100, "three");
});
var p4 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "four");
});

Promise.race([p3, p4]).then(
  function (value) {
    console.log(value); // "three"
    // p3 更快，所以它完成了
  },
  function (reason) {
    // 未被调用
  }
);

var p5 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 500, "five");
});
var p6 = new Promise(function (resolve, reject) {
  setTimeout(reject, 100, "six");
});

Promise.race([p5, p6]).then(
  function (value) {
    // 未被调用
  },
  function (reason) {
    console.log(reason); // "six"
    // p6 更快，所以它失败了
  }
);
