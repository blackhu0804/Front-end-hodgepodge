# 设计模式

## 设计模式的“术”

设计模式分为三种： - 创建型 - 单例模式 - 原型模式 - 构造器模式 - 工厂模式 - 抽象工厂模式 - 行为型 - 桥接模式 - 外观模式 - 组合模式 - 装饰器模式 - 适配器模式 - 代理模式 - 享元模式 - 结构型 - 迭代器模式 - 解释器模式 - 观察者模式 - 中介者模式 - 访问者模式 - 状态模式 - 备忘录模式 - 策略模式 - 模板方法模式 - 职责链模式 - 命令模式

设计模式的核心思想，就是“封装变化”。无论是创建型、结构型还是行为型，这些具体的设计模式都是在用自己的方式去封装不同类型的变化。

创建型模式封装了创建对象过程中的变化；结构型模式封装的是对象之间组合方式的变化，目的在于灵活地表达对象间的配合与依赖关系；而行为型模式则将是对象千变万化的行为进行抽离，确保我们能够更安全、更方便地对行为进行更改。

## 创建型

### 1. 构造器模式

见 `./构造器模式.js`

### 2. 简单工厂模式

见 `./工厂模式.js`

工厂模式可以理解为将创建对象的过程单独封装。

### 3. 单例模式

见 `./单例模式.js`

#### 实现一个全局的模态框

见 `./单例模式弹框.html`

### 4. 原型模式

JavaScript 这门语言的根本就是原型模式。在 Java 等强类型语言中，原型模式的出现是为了实现类型之间的解耦。而 JavaScript 本身类型就比较模糊，不存在类型耦合的问题。

见 `./原型模式.js`

### 5. 装饰器模式

> 它的定义是“在不改变原对象的基础上，通过对其进行包装扩展，使原有对象可以满足用户的更复杂需求。”

参考 `./装饰器模式.js`

### 6. 适配器模式

参考 axios

### 7. 代理模式

> 在某些情况下，出于种种考虑、限制，一个对象不能直接访问另一个对象，需要一个第三者（代理）牵线搭桥从而间接达到访问目的，这样的模式就是代理模式。

#### 前端常见的四种代理类型

- 事件代理

它的场景是一个父元素下有多个子元素，如下：

```html
<div id="father">
  <a href="#">链接1号</a>
  <a href="#">链接2号</a>
  <a href="#">链接3号</a>
  <a href="#">链接4号</a>
  <a href="#">链接5号</a>
  <a href="#">链接6号</a>
</div>
```

实现点击每个 a 标签，都可以弹出标签里面的内容。这时，考虑到事件本身具有“冒泡”的特性，当我们点击 a 元素时，点击事件会冒泡到父元素上，从而被监听到。

所以可以通过只在 div 元素上绑定一次即可，而不需要在子元素上被绑定 N 次 —— 这种做法就是事件代理。

具体实现：

```javascript
const father = document.getElementById("father");

father.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    alert(e.target.innerHTML);
  }
});
```

- 虚拟代理

> 图片预加载，预加载主要是为了避免网络不好、或者图片太大时，页面长时间给用户留白的尴尬。常见的操作是先让这个 img 标签展示一个占位图，然后创建一个 Image 实例，让这个 Image 实例的 src 指向真实的目标图片地址、观察该 Image 实例的加载情况 —— 当其对应的真实图片加载完毕后，即已经有了该图片的缓存内容，再将 DOM 上的 img 元素的 src 指向真实的目标图片地址。

预加载的代理实现：

```javascript
class PreLoadImg {
  constructor(imgNode) {
    // 获取真实的 DOM 节点
    this.imgNode = imgNode;
  }
  // 操作 img 节点的 src 属性
  setSrc(imgUrl) {
    this.imgSrc.src = imgUrl;
  }
}

class ProxyImage {
  static LOADING_URL = "xxxx";

  constructor(targetImage) {
    this.targetImage = targetImage;
  }

  // 操作虚拟 Image， 完成加载
  setSrc(targetUrl) {
    this.targetImage.setSrc(ProxyImage.LOADING_URL);
    const virtualImage = new Image();
    // 监听目标图片加载的情况，完成时再将DOM上的真实img节点的src属性设置为目标图片的url
    virtualImage.onload = () => {
      this.targetImage.setSrc(targetUrl);
    };
    // 设置 src 属性，虚拟 Image 实例开始加载图片
    virtualImage.src = targetUrl;
  }
}
```

- 缓存代理

缓存代理常应用于一些计算量较大的场景里。在这种场景下，我们需要 “用时间换空间” —— 当我们需要用到某个已经计算过得值得时候，不想耗时进行二次计算，而是希望从缓存中去取现成的计算结果。这个时候就需要一个代理在帮我们进行计算的同时，进行计算结果的缓存。

简单实现，对传入的参数进行求和。

```javascript
const addAll = function () {
  console.log("进行了一次新计算");
  let result = 0;
  const len = arguments.length;
  for (let i = 0; i < len; i++) {
    result += arguments[i];
  }
  return result;
};

// 为求和方法创建代理
cosnt proxyAddAll = (function() {
    const resultCache = {};
    return function() {
        const args = Array.prototype.join.call(arguments, '');

        if (args in resultCache) {
            return resultCache[args];
        }
        return resultCache[args] = addAll(...arguments);
    }
})()

proxyAddAll(1, 2, 3);
// 进行了一次新计算
// 6
proxyAddAll(1, 2, 3); // 第二次从 resultCache 中直接取出结果
// 6
```

- 保护代理

在 Vue 源码中有些变量会通过 Proxy 代理的方式暴露给用户，并不想让用户直接访问该变量。这种方式就是保护代理的实现。

### 8. 观察者模式

`./观察者模式.js`

### 9. 发布订阅

`./发布订阅模式.js`

观察者和发布订阅模式的区别：

- 发布者直接触及到订阅者的操作，叫观察者模式
- 发布者不直接触及到订阅者，而是由统一的第三方来完成实际的通信操作，叫做发布订阅模式

### 10. 迭代器模式

`./迭代器模式.js`