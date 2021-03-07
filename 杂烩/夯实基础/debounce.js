/**
 * 
 * @param {*} fn Function
 * @param {*} time Number
 * @param {*} triggleNow Boolean
 */
function debounce(fn, time, immediate) {
  let timeout = null;
  
  let debounced = function () {
    let context = this;
    if (timeout) clearTimeout(timeout);
    
    if (immediate) {
    	let exec = !timeout;
      
      timeout = setTimeout(() => {
      	timeout = null;
      }, time);
      
      if (exec) {
      	fn.apply(context, arguments);
      }
    } else {
    	timeout = setTimeout(() => {
        fn.apply(context, arguments);
      }, time);
    }
  }
  
  debounced.cancel = function() {
		clearTimeout(timeout);
    timeout = null;
  }
  
  return debounced;
}

var count = 1;
var container = document.getElementById('container');

function getUserAction() {
    container.innerHTML = count++;
};

const setUserAction = debounce(getUserAction, 1000, true);

container.onmousemove = setUserAction;