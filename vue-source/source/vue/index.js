import {initState} from './observe';

function Vue(options) { // Vue 中原始用户传入的数据
  this._init(options); // 初始化 Vue， 并且将用户选项传入
}

Vue.prototype._init = function(options) {
  // vue 中的初始化
  let vm = this;
  vm.$options = options;

  // MVVM 原理， 需要数据重新初始化
  initState(vm);
}

export default Vue