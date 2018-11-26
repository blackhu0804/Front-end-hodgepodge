```html
<h1>
  <p>
    <i class="icon"></i>
    标题标题标题
  </p>
</h1>
```

描述：标题中含有一个icon，当标题不超过一行时，居中显示，超过一行以后靠左显示。

```css
ul {width: 500px;margin: 100px auto;overflow: hidden;}
/* 开始了！！！！ */
li {
    /* 这些都不重要 */
    float: left;width: 100px;background: #fafafa;height: 50px;margin-right: 10px;
    /* 重点 */
    text-align: center;
}
/* 重点 */
p {display: inline-block;text-align: left;}
```