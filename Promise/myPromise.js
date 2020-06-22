const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function Promise () {
  this.state = PENDING;
  this.result = null;
}

const transtion = function(promise, state, result) {
  if (promise.state !== PENDING) return;
  promise.state = state;
  promise.result = result;
}