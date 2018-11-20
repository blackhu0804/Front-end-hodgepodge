# Vue-Router 传参的几种方式

## 声明式的导航

```html
  <router-link :to="{ name: 'news', params: { userId: 1111}}">click to news page</router-link>
```

此时需要注意的一个点是，使用**params**传参时，使用命名路由进行参数传递，相当于**POST**的方式，使用`path`会导致取不到值，会返回`undefined`。

```html
<router-link :to="{ path: '/news', query: { userId: 1111}}">click to news page</router-link>
```
使用**query**传递参数时，参数会在url中进行显示，相当于**GET**的方式。

使用`this.$route.params.userId`和 `this.$route.query.userId` 进行参数获取。

## 编程式的导航

```js
router.push({ name: 'newsDetail', params: { id: 123 }})  ->/newsDetail/123

router.push({ path: 'newsDetail', query: { id: 123 }}) ->newsDetail?id=123
```

此外还需要配置路由文件：
```js
  { 
    path: '/newsDetail/:id',
    name:'newsDetail',
    component: newsDetail
  }
```