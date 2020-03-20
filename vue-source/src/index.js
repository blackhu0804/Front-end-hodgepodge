import Vue from 'vue';

let vm = new Vue({
  el: '#app',
  data() {
    return {
      msg: 'hello world'
    }
  },
  render(h) {
    return h('p', {id: 'a'}, this.msg)
  }
})


setTimeout(() => {
  vm.msg = 'hello black';
}, 2000)