import Observer from './observer';
import Watcher from './watcher';
import Dep from './dep';

export function initState(vm) {
  let opts = vm.$options;
  if (opts.data) {
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm, opts.computed);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}

export function observe(data) {
  if(typeof data !== 'object' || data == null) {
    return; // 不是对象或为null 不执行后续逻辑
  }
  if (data.__ob__) {
    return data.__ob__;
  }
  return new Observer(data);
}

/**
 * 将对vm上的取值、赋值操作代理到 vm._data 属性上
 * 代理数据 实现 vm.msg = vm._data.msg
 */
function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    }
  })
}

/**
 * 初始化数据
 * 将用户传入的数据 通过Object.defineProperty重新定义
 */
function initData(vm) {
  let data = vm.$options.data; // 用户传入的data
  data = vm._data = typeof data === 'function' ? data.call(vm) : data || {};

  for(let key in data) {
    proxy(vm, '_data', key); // 将对vm上的取值、赋值操作代理到 vm._data 属性上
  }

  observe(data); // 观察数据
}

/**
 * 初始化计算属性
 */
function createComputedGetter(vm, key) {
  let watcher = vm._watchersComputed[key];
  // 用户取computed值时，调用该方法
  return function() {
    if (watcher) {
      // 如果dirty为false， 不需要重新执行计算属性中的方法
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) { // watcher 就是计算属性watcher dep = [firstName.dep, lastName.dep]
        watcher.depend();
      }
      return watcher.value;
    }
  }
}

function initComputed(vm, computed) {
  // 将计算属性的配置 放到vm上
  let watchers = vm._watchersComputed = Object.create(null); // 创建一个存储计算属性的对象
  for(let key in computed) {
    let userDef = computed[key];
    watchers[key] = new Watcher(vm, userDef, () => {}, {lazy: true}); // lazy: true 标识计算属性watcher 默认刚开始这个方法不会执行

    Object.defineProperty(vm, key, {
      get: createComputedGetter(vm, key)
    })
  }
}

/**
 * 初始化watch
 */

function createWatcher(vm, key, handler, opts) {
  return vm.$watch(key, handler, opts);
}

function initWatch(vm) {
  let watch = vm.$options.watch; // 获取用户传入的watch属性
  for(let key in watch) {
    let userDefined = watch[key];
    let handler = userDefined;
    if (userDefined.handler) {
      handler = userDefined.handler;
    }
    createWatcher(vm, key, handler, {immediate: userDefined.immediate});
  }
}