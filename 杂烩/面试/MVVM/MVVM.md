## 1. 如何理解MVVM

### 1. 使用 jQuery 和 Vue 的区别

Vue 主要实现了以下两个方面区别于 jQuery

- 数据和视图的分离
- 以数据驱动视图

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



## 3. 源码