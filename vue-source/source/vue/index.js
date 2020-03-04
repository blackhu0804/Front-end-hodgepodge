import {initState} from './observe';
import Watcher from './observe/watcher';
import {compiler, util} from './util';

function Vue(options) { // Vue 中原始用户传入的数据
  this._init(options); // 初始化 Vue， 并且将用户选项传入
}

Vue.prototype._init = function(options) {
  // vue 中的初始化
  let vm = this;
  vm.$options = options;

  // MVVM 原理， 需要数据重新初始化
  // 拦截数组的方法 和 对象的属性
  initState(vm);

  // 初始化工作
  if (vm.$options.el) {
    vm.$mount();
  }
}

/**
 * 获取DOM节点
 * @param {*} el 
 */
function query(el) {
  if (typeof el === 'string') {
    return document.querySelector(el);
  };
  return el;
}

/**
 * 用用户传入的数据，更新视图
 */
Vue.prototype._update = function() {
  let vm = this;
  let el = vm.$el;

  /** TODO 虚拟DOM重写 */
  // 匹配 {{}} 替换
  let node = document.createDocumentFragment();
  let firstChild;
  while(firstChild = el.firstChild) {
    node.appendChild(firstChild);
  }

  compiler(node, vm);

  el.appendChild(node);
}

Vue.prototype.$mount = function() {
  let vm = this;
  let el = vm.$options.el; // 获取元素
  el = vm.$el = query(el); // 获取当前挂载的节点 vm.$el 就是我要挂在的一个元素

  // 渲染通过 watcher来渲染
  let updateComponent = () => { // 更新、渲染的逻辑
    vm._update(); // 更新组件
  }
  new Watcher(vm, updateComponent); // 渲染Watcher, 默认调用updateComponent
}
export default Vue