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


function throttle2(fn, time) {
  let timeout = null;
  let start = new Date().getTime();
  return function() {
    let cur = new Date().getTime();
    clearTimeout(timeout);

    if (cur - start >= time) {
      fn();
      start = cur;
    } else {
      timeout = setTimeout(() => {
        fn();
      }, time)
    }
  }
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
  container.innerHTML = count++;
};

const setUserAction = throttle2(getUserAction, 1000);

container.onmousemove = setUserAction;