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
    this.get();
  }
}

export default Watcher;