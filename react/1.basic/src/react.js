import { wrapToVdom } from './utils';

function createElement(type, config, children) {
    let props = {...config};
    let ref, key;
    if (config) {
        ref = config.ref;
        key = config.key;
        delete config.ref;
        delete config.key;
    }
    if (arguments.length > 3) {
        //如果参数长度>3,说明有多个儿子
        props.children = Array.prototype.slice.call(arguments, 2).map(wrapToVdom);
    } else if (arguments.length === 3) {
        props.children = wrapToVdom(children);
    }

    return {
        $$typeof: Symbol('REACT_ELEMENT'),
        type, // dom 类型
        ref,
        key,
        props // className style children
    }
}

const React = {
    createElement
}

export default React;