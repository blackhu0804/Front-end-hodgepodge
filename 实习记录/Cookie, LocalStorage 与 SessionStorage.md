# 探究Cookie、LocalStorage与SessionStroage

## 概念

### Cookie

> Cookie总是保存在客户端中，按在客户端中的存储位置，可分为内存Cookie和硬盘Cookie。内存Cookie由浏览器维护，保存在内存中，浏览器关闭后就消失了，其存在时间是短暂的。硬盘Cookie保存在硬盘里，有一个过期时间，除非用户手工清理或到了过期时间，硬盘Cookie不会被删除，其存在时间是长期的。所以，按存在时间，可分为非持久Cookie和持久Cookie。

> 因为HTTP协议是无状态的，也就是服务器不知道用户上一次做了什么，例如用户浏览网上商城，在结账时，由于HTTP协议的无状态性，所以服务器不知道他买了什么，所以Cookie就是用来绕开HTTP的无状态性的额外手段之一。服务器可以设置或读取Cookie中包含的信息，借此来维护用户跟服务器回话的状态。

- 像上面的购物场景，当用户选购了第一项商品，服务器在向用户发送网页的同时，还发送了一段Cookie，记录着那项商品的信息。当用户访问另一个页面，浏览器会把Cookie发送给服务器，于是服务器知道他之前选购了什么。结账时，服务器读取发送过来的Cookie。
- 另一个典型应用是登陆一个网站时，服务器会请求用户输入账号密码，当勾选自动登陆时，下次会自动登陆，这是在上次登陆时，服务器发送了Cookie到用户的硬盘上。第二次登陆，如果Cookie未到期，浏览器会发送Cookie，服务器验证就可以直接登陆了。

#### 缺陷

1. Cookie会附加在HTTP请求中，加大流量。
2. Cookie在HTTP请求中是明文传递，有安全隐患，用HTTPS可以避免这个问题
3. Cokkie 大小为4kb左右

### WebStorage

#### 属性

- `Storage.length`返回保存的数据项个数
```javascript
    window.localStorage.setItem('foo', 'a');
    window.localStorage.setItem('bar', 'b');
    window.localStorage.setItem('baz', 'c');

    window.localStorage.length // 3
```

#### 方法

- `Storage.setItem()` 方法用于存入数据。它接受两个参数，第一个是键名，第二个是保存的数据。如果键名已经存在，该方法会更新已有的键值。该方法没有返回值。

```javascript
    window.sessionStorage.setItem('key', 'value');
    window.localStorage.setItem('key', 'value');
    //写入不一定要用这个方法，直接赋值也是可以的。
    // 下面三种写法等价
    window.localStorage.foo = '123';
    window.localStorage['foo'] = '123';
    window.localStorage.setItem('foo', '123');
```

- `Storage.getItem()`方法用于读取数据。它只有一个参数，就是键名。如果键名不存在，该方法返回`null`。

```javascript
    window.sessionStorage.getItem('key')
    window.localStorage.getItem('key')
```

- `Storage.removeItem()`方法用于清除某个键名对应的键值。它接受键名作为参数，如果键名不存在，该方法不会做任何事情。

```javascript
    sessionStorage.removeItem('key');
    localStorage.removeItem('key');
```

- `Storage.clear()`方法用于清除所有保存的数据。该方法的返回值是`undefined`。

```javascript
    window.sessionStorage.clear()
    window.localStorage.clear()
```

- `Storage.key()`接受一个整数作为参数（从零开始），返回该位置对应的键值。

```javascript
    window.sessionStorage.setItem('key', 'value');
    window.sessionStorage.key(0) // "key"
```

#### 区别与相同点

- 大小一般为5MB，都在客户端（浏览器）中保存，不参与服务器通讯。
- localStroage可以永久保存，除非被清除。
- sessionStroage在当前会话有效，关闭页面或浏览器后被清除