# Grid 布局指南

## 初步了解和兼容性

使用 Grid 布局和 Flex 非常相似，只需在父元素上设置`display: grid;`即可，通过设置列`grid-template-columns` 和 行`grid-template-rows` 的大小，然后用`grid-column` 和 `grid-row`定义容器子元素的位置。

### 兼容性

目前IE10、11 还不支持，chrome、FireFox最新版本已经支持。作为一个前端er，没有理由不学新东西！

## 1. display: grid | inline-grid | subgrid;

- grid：生成一个块级网格
- inline-grid：生成一个行级网格
- subgrid：如果你的 grid container 本身就是一个 grid item（即,嵌套网格），你可以使用这个属性来表示你想从它的父节点获取它的行/列的大小，而不是指定它自己的大小。

## 2. grid-template-columns / grid-template-rows

使用以空格分隔的多个值来定义网格的列和行。这些值表示轨道大小(track size)，它们之间的空格代表表格线(grid line)。

例子:

```css
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
```

如果你的定义中包含重复的部分，则可以使用`repeat()` 符号来简化写法：

```css
.container {
  grid-template-columns: repeat(3, 20px [col-start]) 5%;
}
```

上面的写法和下面等价：

```css
.container {
  grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;
}
```

“fr”单位允许您将轨道大小设置为网格容器自由空间的一部分。 例如，下面的代码会将每个 grid item 为 grid container 宽度的三分之一：

```css
.container {
  grid-template-columns: 1fr 1fr 1fr;
}
```

## 3. grid-column-gap / grid-row-gap

指定网格线的大小，你可以把它想象为设置列/行之间的间距的宽度。

```css
.container {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  grid-column-gap: 10px;
  grid-row-gap: 15px;
}
```

## 4. justify-items (左右对齐方式)

沿着行轴对齐网格内的内容（与之对应的是 align-items, 即沿着列轴对齐），该值适用于容器内的所有的 grid items。

值：

- **start**: 内容与网格区域的左端对齐
- **end**: 内容与网格区域的右端对齐
- **center**: 内容位于网格区域的中间位置
- **stretch**: 内容宽度占据整个网格区域空间(这是默认值)

```css
.container {
  justify-items: start | end | center | stretch;
}
```

## 5. align-items（上下对齐方式）

沿着列轴对齐grid item 里的内容（与之对应的是使用 justify-items 设置沿着行轴对齐），该值适用于容器内的所有 grid items。

值：

- **start**: 内容与网格区域的顶端对齐
- **end**: 内容与网格区域的底部对齐
- **center**: 内容位于网格区域的垂直中心位置
- **stretch**: 内容高度占据整个网格区域空间(这是默认值)

```css
.container {
  align-items: start | end | center | stretch;
}
```

## 6. justify-content（左右）

值：

- start - 网格与网格容器的左边对齐
- end - 网格与网格容器的右边对齐
- center - 网格与网格容器的中间对齐
- stretch - 调整g rid item 的大小，让宽度填充整个网格容器
- space-around - 在 grid item 之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半
- space-between - 在 grid item 之间设置均等宽度空白间隙，其外边缘无间隙
- space-evenly - 在每个 grid item 之间设置均等宽度的空白间隙，包括外边缘

```css
.container {
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

## 7. align-content（上下）

值：

- start - 网格与网格容器的顶部对齐
- end - 网格与网格容器的底部对齐
- center - 网格与网格容器的中间对齐
- stretch - 调整 grid item 的大小，让高度填充整个网格容器
- space-around - 在 grid item 之间设置均等宽度的空白间隙，其外边缘间隙大小为中间空白间隙宽度的一半
- space-between - 在 grid item 之间设置均等宽度空白间隙，其外边缘无间隙
- space-evenly - 在每个 grid item 之间设置均等宽度的空白间隙，包括外边缘

```css
.container {
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;  
}
```

## 8. grid-template-areas

值：

- `<grid-area-name>` - 使用 grid-area 属性设置的网格区域的名称
- `.` - 点号代表一个空网格单元
- **none** - 没有定义网格区域

举例：

```text
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

这将创建一个四列宽三行高的网格。 整个第一行将由 **header** 区域组成。 中间一行将由两个 **main** 区域、一个空单元格和一个 **sidebar** 区域组成。 最后一行是**footer**区域组成。

![](https://pic3.zhimg.com/80/v2-fc0a114d7e698e5d231a5c976399c48b_hd.jpg)