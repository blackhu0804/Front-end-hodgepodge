# 初探 Grid 布局

> CSS网格布局用于将页面分割成数个主要区域，或者用来定义组件内部元素间大小、位置和图层之间的关系。像表格一样，网格布局让我们能够按行或列来对齐元素。 但是，使用CSS网格可能还是比CSS表格更容易布局。 例如，网格容器的子元素可以自己定位，以便它们像CSS定位的元素一样，真正的有重叠和层次。

## 第一个Grid布局

CSS Grid 布局由两个核心组成部分是 wrapper（父元素）和 items（子元素）。 wrapper 是实际的 grid(网格)，items 是 grid(网格) 内的内容。

下面是一个 wrapper 元素，内部包含6个 items，要把 wrapper 定义为网格布局，给父元素加上`display: grid;`即可。
[示例1](http://jsbin.com/yinuwar/edit?html,css,output)。这并没有什么效果，因为我们并没有定义`grid`布局是什么样子的。

## Column 和 Row

### 定义列宽和行宽

为了使其成为二维的网格容器，需要在父元素上面定义`grid-template-colums` 和 `grid-template-rows`属性。

[示例2](http://jsbin.com/yinuwar/edit?html,css,output)，`grid-template-colums`写入3个值，对应每列的宽度，`grid-template-rows`写入2个值，对应了两列的宽度。

### 决定一个子元素的大小

使用`grid-column-start`决定元素开始的网格线，`grid-column-end`决定元素结束的网格线，[示例3](http://jsbin.com/yinuwar/edit?html,css,output)，让 `item1` 占据从第一条网格线开始，到第四条网格线结束。换句话说，它将独立占据整行。其中`grid-column: 1 / 4;`是上述两个条件的缩写。来修改一下[示例4](http://jsbin.com/yinuwar/7/edit?html,css,output)