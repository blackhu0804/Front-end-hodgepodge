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
      arr: [1, 2, 3]
    }
  },
  computed: {

  },
  watch: {

  }
});

console.log(vm);