import element from "./virtualDom.js";

let ul = element(
  'ul',
  {
    id: 'list'
  },
  [
    element( 'li', {class: 'item'}, ['item1'] ),
    element( 'li', {class: 'item'}, ['item2'] ),
    element( 'li', {class: 'item'}, ['item3'] ),
  ]
);

let app = document.getElementById("app");
let ulRoot = ul.render();

app.appendChild(ulRoot);