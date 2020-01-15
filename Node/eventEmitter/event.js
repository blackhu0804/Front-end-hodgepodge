function EventEmitter() {
  this._events = Object.create(null);
}

EventEmitter.prototype.on = function (eventName, callback) {
  // 默认先去已经订阅好的结果中拿到callbacks 如果没有默认是 []
  if (!this._events) this._events = Object.create(null);
  let callbacks = this._events[eventName] || [];
  callbacks.push(callback);  // 把当前的 callback 放到数组中

  this._events[eventName] = callbacks;
}

EventEmitter.prototype.emit = function (eventName, ...args) {
  let callbacks = this._events[eventName] || [];
  
  callbacks.forEach(callback => {
    callback(...args);
  })
}


module.exports = EventEmitter;