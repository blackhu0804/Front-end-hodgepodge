## 问题描述：再A页面->B页面->C页面，需要在C页面点击返回到A页面。

使用
```js
this.$router.replace({path: '/c'})
```

此时返回会跳过B页面，直接返回A页面。

---

此方法类似于`history.replaceState()`，`replaceState()` 的使用场景在于为了响应用户操作，你想要更新状态对象state或者当前历史记录的URL。不会添加历史记录。

假定当前网页是example.com/example.html。

```js
history.pushState({page: 1}, 'title 1', '?page=1')
// URL 显示为 http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL 显示为 http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL 显示为 http://example.com/example.html?page=3

history.back()
// URL 显示为 http://example.com/example.html?page=1
```