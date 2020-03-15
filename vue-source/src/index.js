
import { h, render } from "./vdom";

let oldVnode = h('div', {id: 'container', key: 1}, 
  h('span', {style: {color: 'red'}}, 'hello'),
  'world'
)

let container = document.getElementById('app');
render(oldVnode, container);

// console.log(oldVnode);