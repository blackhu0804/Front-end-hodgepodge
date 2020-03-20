
import { h, render, patch } from "../../source/vue/vdom";

let container = document.getElementById('app');

let oldVnode = h('div', {id: 'container'}, 
  h('li', {key: 'a', style: {background: 'red'}}, 'a'),
  h('li', {key: 'b', style: {background: 'yellow'}}, 'b'),
  h('li', {key: 'c', style: {background: 'grey'}}, 'c'),
  h('li', {key: 'd', style: {background: 'blue'}}, 'd'),
)

/** patchVnode 用心的虚拟节点和老的虚拟节点做对比， 更新真实的DOM元素 */
render(oldVnode, container);

let newVnode = h('div', {id: 'a', key: 1},
  h('li', {key: 'e', style: {background: 'red'}}, 'e'),
  h('li', {key: 'f', style: {background: 'yellow'}}, 'f'),
  // h('li', {key: 'd', style: {background: 'blue'}}, 'd'),
  h('li', {key: 'a', style: {background: 'red'}}, 'a'),
  h('li', {key: 'b', style: {background: 'yellow'}}, 'b'),
  h('li', {key: 'c', style: {background: 'grey'}}, 'c'),
  h('li', {key: 'e', style: {background: 'pink'}}, 'e'),
);

setTimeout(() => {
  patch(oldVnode, newVnode)
}, 2000)

// console.log(oldVnode);