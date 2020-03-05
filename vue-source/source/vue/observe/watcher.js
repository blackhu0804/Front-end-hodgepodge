let id = 0;
import {pushTarget, popTarget} from './dep';

class Watcher { // 每次产生一个watch 都会有一个唯一的标识
  /**
   * 
   * @param {*} vm 当前逐渐的实例 new Vue 
   * @param {*} exprOrFn 用户可能传入的一个表达式 也可能传入一个函数
   * @param {*} cb 用户传入的回调函数 vm.$watch('msg', cb) 
   * @param {*} opts 一些其他参数
   */
  constructor(vm, exprOrFn, cb = () => {}, opts = {}) {
    this.vm = vm;
    this.exprOrFn = exprOrFn;
    if (typeof exprOrFn === 'function') {
      this.getter = exprOrFn;
    }
    this.cb = cb;
    this.deps = [];
    this.depsId = new Set();
    this.opts = opts;
    this.id = id++;

    this.get();
  }

  get() {
    pushTarget(this); // 渲染watcher 将Dep.target = watcher
    // 默认创建watcher 会执行此方法
    this.getter(); // 让传入的函数执行
    popTarget();
  }

  addDep(dep) { // 同一个 wathcer 不应该重复记录 dep 让 wathcer 和 dep 互相记忆
    let id = dep.id;
    if (!this.depsId.has(id)) {
      this.depsId.add(id)
      this.deps.push(dep); // 让 watcher 记住了当前的 dep
      dep.addSub(this);
    }
  }

  update() {
    queueWatcher(this);
  }

  run() {
    this.get();
  }
}

let has = {};
let queue = [];
function flushQueue() {
  queue.forEach(watcher => watcher.run());
  has = {};
  queue = [];
}

function queueWatcher(wathcer) {
  // 对重复的wathcer进行过滤操作, 相同的 watcher 只会存一个
  let id = wathcer.id;
  if(has[id] == null) {
    has[id] = true;
    queue.push(wathcer);
    // 延迟清空队列
    nextTick(flushQueue);
  }
}

let callbacks = [];
function flushCallbacks() {
  callbacks.forEach(cb => cb());
}

/**
 * 异步刷新方法
 * @param {*} cb 
 */
function nextTick(cb) {
  callbacks.push(cb);
  // 异步刷新callbacks，获取一个异步的方法
  let timerFunc = () => {
    flushCallbacks();
  }
  if (Promise) {
    return Promise.resolve().then(timerFunc);
  }
  if (MutationObserver) {
    let observe = new MutationObserver(timerFunc);
    let textNode = document.createTextNode(1);
    observe.observe(textNode, {characterData: true});
    textNode.textContent = 2;
    return;
  }
  if(setImmediate) {
    return setImmediate(timerFunc);
  }
  return setTimeout(timerFunc, 0);
}

export default Watcher;