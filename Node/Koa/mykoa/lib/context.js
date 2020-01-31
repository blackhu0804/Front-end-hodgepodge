let proto = {

}

function defineGetter (target, property) {
  proto.__defineGetter__(property, function() {
    // this 指向用户调用获取 url 时的ctx
    return this[target][property];
  });
}

defineGetter('request', 'url');
defineGetter('request', 'path');

module.exports = proto;