let proto = {

}

function defineGetter (target, property) {
  proto.__defineGetter__(property, function() {
    // this 指向用户调用获取 url 时的ctx
    return this[target][property];
  });
}

function defineSetter (target, property) {
  proto.__defineSetter__(property, function(value) {
    this[target][property] = value;
  })
}

defineGetter('request', 'url');
defineGetter('request', 'path');

defineGetter('response', 'body');
defineSetter('response', 'body');
module.exports = proto;