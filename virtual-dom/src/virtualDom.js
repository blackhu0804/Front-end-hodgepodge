/* <ul id="list">
  <li class="item">item1</li>
  <li class="item">item2</li>
  <li class="item">item3</li>
</ul> */

import * as _ from './utils';

class Element {
  constructor (tagName, attrs, children) {
    // 如果只有两个参数
    if (_.isArray(attrs)) {
      children = attrs;
      attrs = {};
    }

    this.tagName = tagName;
    this.attrs = attrs || {};
    this.children = children;
    this.key = attrs ? attrs.key : void 0;
  }

  render() {
    let el = document.createElement(this.tagName);
    let attrs = this.attrs;

    for (let attrName in attrs) { // 遍历设置结点的属性
      let attrValue = attrs[attrName];
      _.setAttr(el, attrName, attrValue);
    }

    let children = this.children || [];
    children.forEach(child => {
      let childEl = child instanceof Element
          ? child.render() // 若子节点也是虚拟节点，递归进行构建
          : document.createTextNode(child) // 如果是字符串，直接创建
      el.appendChild(childEl);
    })
    return el;
  }
}

export default function(tagName, props, children) {
  return new Element(tagName, props, children);
}
