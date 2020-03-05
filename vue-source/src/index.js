import Vue from 'vue';

let vm = new Vue({
  el: '#app', // 表示要渲染的元素是app
  data() {
    return {
      msg: 'hello',
      school: {
        name: 'black',
        age: 18
      },
      arr: [[1], 2, 3]
    }
  },
  computed: {

  },
  watch: {

  }
});

// console.log(vm);

// 对原生方法进行劫持 并且如果新增对象也要进行劫持
// console.log(vm.arr.push({a: 1}), vm.arr[0].a);
// console.log(vm.arr[0].a = 100);

setTimeout(() => {
  vm.arr[0].push(4);
  console.log(vm);
}, 0)
