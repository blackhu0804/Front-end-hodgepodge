# CSS相关

## 1.左边定宽，右边自适应方案：

```css
/* 方案1 */
.left {
    width: 120px;
    float: left;
}
.right {
    margin-left: 120px;
}

/* 方案2 */
.left {
    width: 120px;
    float: left;
}
.right {
    float: left;
    width: calc(100% - 120px);
}
```

## 2.左右两边定宽，中间自适应

```css
/* 方案1:中间列一定要放在左右两列的后面  */
.left {
    float : left;
    height: 200px;
    width: 200px;
    background-color: red;
}
.right {
    float: right;
    height: 200px;
    width: 200px;
    background-color: green;
}
.center {
    height: 200px;
    margin: 0 210px;
    background-color: blue;
}

/* 方案2 */
.left {
    float : left;
    height: 200px;
    width: 200px;
    background-color: red;
}
.right {
    float: right;
    height: 200px;
    width: 200px;
    background-color: green;
}
.center {
    height: 200px;
    margin-left: 200px;
    width: calc(100% - 400px);
}

/* 方案3 */
.wrap {
    display: flex;
}
.left {
    width: 120px;
}
.right {
    width: 120px;
}
.center {
    flex: 1;
}
```

## 3.CSS左右垂直居中

1. 设置padding
2. 绝对定位
3. vertical-align
4. table-cell
5. 行内元素居中
6. flex

```css
/* 1 */
<div class="layout">
    <h1>hello world</h1>
    <h1>hello world</h1>
</div>

.layout{
  text-align: center;
  padding : 40px 0;
  background-color: #ddd;
}

/* 2 */
.layout {
    position: absolute;
    left: 50%;
    right: 50%;
    border: 1px solid red;
    transfrom: translate(-50%, -50%);
    /* 如果知道宽度可采用负margin，兼容ie */
}

/* 3 */
.layout {
    height: 500px;
    width: 400px;
}
.layout:before {
    content: '';
    display: inline-block;
    height: 100%;
    vertical-align: middle;
}
h1 {
    vertical-align: middle;
    display: inline-block;
}

/* 4 */
.layout {
    display: table;
    width: 400px;
    height: 400px;
    text-align:center;
}
h1 {
    display: table-cell;
    vertical-align: middle;
}

/* 5 */
.layout {
    height: 200px;
    text-align: center;
}
span {
    line-height: 200px;
}

/* 6 */
.layout {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

## 4.box-sizing

- content-box: 默认值 width只包括内容的宽度，总宽度 = width + margin + padding + border
- border-box: width = padding + border + 内容， 总宽度 = margin + width

## 5. 格式化上下文

- BFC：块级格式化上下文，也就是产生一个容器，容器中的内容不会影响到外面的元素。也就是要脱离文档流。

1. float 值不为 none
2. overflow 的值不为 visible
3. position 的值不为relative 和 static
4. display 的值为 table-cell、table-caption、inline-block

