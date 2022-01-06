import React from './react';
import ReactDOM from './react-dom';

// let reactEle = React.createElement('h1', {
//   className: 'title',
//   style: {
//     color: 'red'
//   }
// }, 'hello ', React.createElement('span', null, 'world'));

// console.log(reactEle);

/**
 * 函数组件：
 *  1. 接受一个 props 对象作为参数，返回一个 React 元素
 *  2. 组件名称首字母大写
 *  3. 先定义再使用
 * @param {*} props 
 * @returns 
 */
// function FunctionComponent(props) {
//   // return <div className="title" style={{color: 'red'}}>hello</div>;
//   return React.createElement('div', {className: 'title'}, 'hello')
// }

// let reactEle = <FunctionComponent name="world"></FunctionComponent>

class ClassComponent extends React.Component {
  render() {
    return <div className="title" style={{color: 'red'}}>hello</div>;
  }
}

let reactEle = <ClassComponent name="world"></ClassComponent>

ReactDOM.render(reactEle, document.getElementById('root'))