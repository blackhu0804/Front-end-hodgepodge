import React from './react';
import ReactDOM from './react-dom';

let reactEle = React.createElement('h1', {
  className: 'title',
  style: {
    color: 'red'
  }
}, 'hello ', React.createElement('span', null, 'world'));

console.log(reactEle);

ReactDOM.render(reactEle, document.getElementById('root'))