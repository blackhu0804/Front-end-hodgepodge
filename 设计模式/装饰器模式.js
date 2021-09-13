// // 装饰器函数，它的第一个参数是目标类
// function classDecorator(target) {
//   // 此时的 target 就是被装饰的类本身
//     target.hasDecorator = true;
//     return target;
// }

// @classDecorator
// class Button {
//     // 
// }

// // 验证装饰器是否生效
// console.log('Button 是否被装饰了：', Button.hasDecorator)


function clickDecorator(target, name, descriptor) {
    // 此时的 target 变成了 Button.prototype
    // name 使我们修饰的目标属性名
    // descriptor 属性描述对象，相当于 Object.defindProperty
    let originalMethod = descriptor.value;
    descriptor.value = function () {
        console.log('我是装饰器逻辑');
        return originalMethod.apply(this, arguments);
    }
    return descriptor;
}

class Button {
    @clickDecorator
    onClick() {
        console.log('我是原有逻辑');
    }
}

const button = new Button();
button.onClick();