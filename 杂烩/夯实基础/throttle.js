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

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

const setUserAction = throttle(getUserAction, 1000);

container.onmousemove = setUserAction;