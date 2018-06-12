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
```