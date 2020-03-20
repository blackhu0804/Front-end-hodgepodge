export function render(vnode, container) {
  let el = createEle(vnode);
  container.appendChild(el);
}


/**
 * 创建真实节点
 */
function createEle(vnode) {
  let {tag, children, key, props, text} = vnode;
  if (typeof tag === 'string') {
    // 标签 一个虚拟节点对应着他的真实节点
    vnode.el = document.createElement(tag);
    updateProperties(vnode);
    children.forEach(child => {
      return render(child, vnode.el); // 递归渲染当前孩子列表
    });
  } else {
    // 文本
    vnode.el = document.createTextNode(text);
  }

  return vnode.el;
}

/**
 * 节点 初始化属性 更新属性
 * @param {*} vnode 
 * @param {*} oldProps 
 */
function updateProperties(vnode, oldProps = {}) {
  let newProps = vnode.props || {}; // 获取当前老节点中的属性
  let el = vnode.el; // 当前的真实节点

  let newStyle = newProps.style || {};
  let oldStyle = oldProps.style || {};

  for (let key in oldStyle) {
    if (!newStyle[key]) {
      el.style[key] = '';
    }
  }

  // 更新时 用新的属性更新老的节点， 如果老的有，新的没有
  for (let key in oldProps) {
    if (!newProps[key]) {
      delete el[key];
    }
  }

  for(let key in newProps) {
    if (key === 'style') {
      for (let styleName in newProps.style) {
        el.style[styleName] = newProps.style[styleName];
      }
    } else if (key === 'class') {
      el.className = newProps.class;
    } else {
      el[key] = newProps[key];
    }
  }
}

/**
 * node 比对
 * 
 */
export function patch(oldVnode, newVnode) {
  // 1） 先比对标签
  if (oldVnode.tag !== newVnode.tag) {
    oldVnode.el.parentNode.replaceChild(createEle(newVnode), oldVnode.el);
  }
  // 2) 比对文本 标签一样
  if (!oldVnode.tag) {
    if (oldVnode.text !== newVnode.text) { // 内容不一致直接根据当前新的元素中的内容来替换掉文本节点
      newVnode.el.textContent = newVnode.text;
    }
  }
  // 3) 标签一样属性不一样
  let el = newVnode.el =  oldVnode.el;
  updateProperties(newVnode, oldVnode.props); // 更新属性

  // 4) 比较孩子
  let oldChildren = oldVnode.children || [];
  let newChildren = newVnode.children || [];

  if (oldChildren.length > 0 && newChildren.length > 0) {
    updateChildren(el, oldChildren, newChildren);
  } else if (oldChildren.length > 0) {
    el.innerHTML = '';
  } else if (newChildren.length > 0) {
    for (let i = 0; i < newChildren.length; i++) {
      let child = newChildren[i];
      el.appendChild(createEle(child));
    }
  }
}

/**
 * 判断两个节点是否一样
 */
function isSameVnode(oldVnode, newVnode) {
  return (oldVnode.tag === newVnode.tag) && (oldVnode.key === newVnode.key);
}

function updateChildren(parent, oldChildren, newChildren) {
  let oldStartIndex = 0;
  let oldStartVnode = oldChildren[0];
  let oldEndIndex = oldChildren.length - 1;
  let oldEndVnode = oldChildren[oldEndIndex];

  let newStartIndex = 0;
  let newStartVnode = newChildren[0];
  let newEndIndex = newChildren.length - 1;
  let newEndVnode = newChildren[newEndIndex];

  function makeIndexByKey (children) {
    let map = {};
    children.forEach((item, index) => {
      map[item.key] = index;
    })
    return map;
  }

  let map = makeIndexByKey(oldChildren);
  while(oldStartIndex <= oldEndIndex && newStartIndex <= newEndIndex) {
    if (!oldStartVnode) {
      oldStartVnode = oldChildren[++oldStartIndex];
    } else if (!oldEndVnode) {
      oldEndVnode = oldChildren[--oldEndIndex];
    } else if (isSameVnode(oldStartVnode, newStartVnode)) { // 从头开始比较
      patch(oldStartVnode, newStartVnode);
      oldStartVnode = oldChildren[++oldStartIndex];
      newStartVnode = newChildren[++newStartIndex];
    } else if (isSameVnode(oldEndVnode, newEndVnode)) { // 从尾开始比较
      patch(oldEndVnode, newEndVnode);
      oldEndVnode = oldChildren[--oldEndIndex];
      newEndVnode = newChildren[--newEndIndex];
    } else if (isSameVnode(oldStartVnode, newEndVnode)) { // 倒序
      patch(oldStartVnode, newEndVnode);
      parent.insertBefore(oldStartVnode.el, oldEndVnode.el.nextSibling);
      oldStartVnode = oldChildren[oldStartIndex++];
      newEndVnode = newChildren[newEndIndex--];
    } else if (isSameVnode(oldEndVnode, newStartVnode)) { // 将尾部插入到前面
      patch(oldEndVnode, newStartVnode);
      parent.insertBefore(oldEndVnode.el, oldStartVnode.el);
      oldEndVnode = oldChildren[--oldEndIndex];
      newStartVnode = newChildren[++newStartIndex];
    } else {
      // 两个列表乱序 并且不复用
      // 先拿新节点的第一项 去老节点中匹配， 匹配不到直接将这个节点插入到老节点的开头，如果能查到直接移动老节点
      let moveIndex = map[newStartVnode.key];
      if (moveIndex == undefined) {
        parent.insertBefore(createEle(newStartVnode), oldStartVnode.el);
      } else {
        // 移动老元素的位置
        let moveVnode = oldChildren[moveIndex];
        parent.insertBefore(moveVnode.el, oldStartVnode.el);
        patch(moveVnode, newStartVnode);
        oldChildren[moveIndex] = undefined;
      }
      newStartVnode = newChildren[++newStartIndex];
    }
  }

  // 新的节点元素比老的节点多
  if (newStartIndex <= newEndIndex) { 
    // 比对以后新的节点还剩余，将剩余节点插入
    for (let i = newStartIndex; i <= newEndIndex; i++) {
      let ele = newChildren[newEndIndex + 1] == null ? null : newChildren[newEndIndex + 1].el;
      parent.insertBefore(createEle(newChildren[i]),ele)
      // parent.appendChild(createEle(newChildren[i]));
    }
  }

  if (oldStartIndex <= oldEndIndex) {
    for (let i = oldStartIndex; i <= oldEndIndex; i++) {
      let child = oldChildren[i];
      if (child != undefined) {
        parent.removeChild(child.el);
      }
    }
  }
}