function throttle(fn, time) {
  let timeout = null;
  let begin = new Date().getTime();
  return function() {
    let self = this;
    let cur = new Date().getTime();

    clearTimeout(timeout);

    if (cur - begin >= time) {
      fn.apply(self, arguments);
      begin = cur;
    } else {
      timeout = setTimeout(() => {
        fn.apply(self, arguments);
      }, time);
    }
  }
}

function throttle1(fn, time) {
  let flag = true;

  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.call(this, ...arguments);
    }, time);
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

const setUserAction = throttle1(getUserAction, 1000);

container.onmousemove = setUserAction;