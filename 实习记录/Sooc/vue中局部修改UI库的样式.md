## 最近项目中遇到的问题，只想在某个组件里面更改element-Ui的样式，而不影响全局。

- 直接说方法：在需要更改的组件里新增一个style标签【重点：不要加scoped】，然后直接获取class设置样式就可以咯，class自己去浏览器里右键审查元素可得到。

**注意：在获取到的样式里加上能限制范围的父层选择器，不然就变成全局样式咯。**

```css
<style>
  .wrap .el-form-item__label{
    font-size: 16px;
  }
</style>
<style lang="css" scoped>
 
</style>
```