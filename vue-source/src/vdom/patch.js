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
  let newProps = vnode.props; // 获取当前老节点中的属性
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