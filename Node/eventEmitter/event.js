function EventEmitter() {
  this._events = Object.create(null);
}

EventEmitter.prototype.on = function (eventName, callback) {
  // 默认先去已经订阅好的结果中拿到callbacks 如果没有默认是 []
  if (!this._events) this._events = Object.create(null);
  this.emit('newListener', eventName); // 如果绑定了事件就触发一下newListener方法 
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

EventEmitter.prototype.off = function (eventName, callback) {
  let callbacks = this._events[eventName] || [];
  this._events[eventName] = callbacks.filter((cb) => {
    return cb !== callback && cb.callback !== callback;
  });
}

EventEmitter.prototype.once = function (eventName, callback) {
  const one = (...args) => {
    callback(...args);
    this.off(eventName, callback);
  }
  one.callback = callback;
  this.on(eventName, one);
}

module.exports = EventEmitter;