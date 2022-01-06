function render(vdom, container) {
    mount(vdom, container);
}

function mount(vdom, parentDom) {
    let newDOM = createDOM(vdom);
    parentDom.appendChild(newDOM);
}

function createDOM(vdom) {
    let { type, props } = vdom;
    let dom;
    if (type === "REACT_TEXT") {
        dom = document.createTextNode(props.content);
    } else if (typeof type === 'function') {
        if (type.isReactComponent) { // 类组件
            return mountClassComponent(vdom)
        } else {
            return mountFunctionComponent(vdom);
        }
    } else if (typeof type === 'string') {
        dom = document.createElement(type);
    }
    if (props) {
        // 更新 dom 属性
        updateProps(dom, {}, props);
        let children = props.children;
        if (typeof children === 'object' && children.type) {
            render(children, dom);
        } else if (Array.isArray(children)) {
            reconcileChildren(children, dom);
        }
    }

    vdom.dom = dom;
    return dom;
}

function mountClassComponent(vdom) {
    let {type: ClassComponent, props} = vdom;
    let classInstance = new ClassComponent(props); // 创建类组件实例
    let renderVdom = classInstance.render();
    return createDOM(renderVdom);
}

function mountFunctionComponent(vdom) {
    let { type: functionComponent , props } = vdom;
    const renderVdom = functionComponent(props); // 获取组件将要渲染的 vdom
    return createDOM(renderVdom);
}

function reconcileChildren(children, parentDom) {
    children.forEach(element => {
        mount(element, parentDom);
    });
}

function updateProps(dom, oldProps, newProps) {
    for (let key in newProps) {
        if (key === 'children') {
            continue;
        } else if (key === 'style') {
            let styleObj = newProps[key];
            for (let attr in styleObj) {
                dom.style[attr] = styleObj[attr];
            }
        } else {
            dom[key] = newProps[key];
        }
    }

    for (let key in oldProps) {
        if (!newProps.hasOwnProperty(key)) {
            dom[key] = null;
        }
    }
}

const ReactDOM = {
    render
}

export default ReactDOM