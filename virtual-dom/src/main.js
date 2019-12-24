import el from "./virtualDom.js";
import diff from './diff.js';

let ul = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item', key: 1 }, ['Item 2']),
  el('li', { class: 'item' }, ['Item 3'])
])
let ul1 = el('ul', { id: 'list' }, [
  el('li', { class: 'item' }, ['Item 3']),
  el('li', { class: 'item' }, ['Item 1']),
  el('li', { class: 'item', key: 1 }, ['Item 2'])
])
let patches = diff(ul, ul1);

console.log(patches);

// let app = document.getElementById("app");
// let ulRoot = ul.render();

// app.appendChild(ulRoot);