## 1. 如何理解MVVM

### 1. 使用 jQuery 和 Vue 的区别

Vue 主要实现了以下两个方面区别于 jQuery

- 数据和视图的分离，解耦
- 以数据驱动视图，只关心数据变化，DOM 操作被封装

### 2. 对 MVVM 的理解

#### MVC

- View：用户通过点击等操作去操作控制器
- Controller: 去操作Model修改数据
- Model：Model去更新页面

#### MVVM

- View：代表视图、模板（视图和模型是分离的）
- Model：代表一个数据模型，也就是 Vue 中的 data
- ViewModel：就是 View 和 Model 之间的一个桥，进行数据视图的更新，View 通过事件绑定来操作 Model， Model 通过数据绑定修改 View

### 3. MVVM 框架的三个要素

- 响应式：Vue 如何监听到 data 的每个属性的变化
- 模板引擎：Vue 的模板如何被解析，指令如何处理
- 渲染：Vue 的模板如何被渲染成 HTML，以及渲染过程

## 2. 如何实现MVVM
### 1. Vue 中如何实现响应式

- Object.definedProperty
- 将 data 的属性代理到 vm 实例上

### 2. Vue 中如何解析模板

- 模板是什么？
    - 本质： 字符串
    - 有逻辑功能：v-for，v-if
    - 与html格式相似，但有很大区别
    - 最终要转换为JS代码，因为JS才能处理逻辑，最终还是要转换为HTML来展示，所以模板要转换为一个render函数
- render 函数
    - 模板的所有信息都会包含在render函数中
    - this 即 vm
- render 函数 与 vdom

### 3. Vue 的整个实现流程

1. 解析模板成 render 函数
2. 响应式开始监听
3. 首次渲染，显示页面，绑定依赖
4. data属性变化，触发 rerender

## 3. 源码