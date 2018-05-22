# 关于URL编码

> 一次在发get请求时，地址栏输入的url和请求的url不一致，寻求什么原因，最后找到是url编码的问题。url的get请求的参数被转码导致地址不同请求接口失败。

## 有四种情况会导致url转码：

### 1. 网址路径中包含汉字

当url中含有汉字时，浏览器会自动将汉字转变为UTF-8编码。
例如`http://zh.wikipedia.org/wiki/春节`会转变为`http://zh.wikipedia.org/wiki/%E6%98%A5%E8%8A%82"`

### 2. 查询字符串包含汉字

当查询字符串中包含汉字时，浏览器会按照操作系统的默认编码转码汉字

### 3. Get方法生成的URL包含汉字

已打开的网页上，直接用Get或Post方法发出HTTP请求。
这时的编码方法由网页的编码决定，也就是由HTML源码中字符集的设定决定。

### 4. Ajax调用的URL包含汉字

前面三种情况都是由浏览器发出HTTP请求，最后一种情况则是由Javascript生成HTTP请求，也就是Ajax调用。在这种情况下，IE和Firefox的处理方式完全不一样。在Ajax调用中，IE总是采用GB2312编码（操作系统的默认编码），而Firefox总是采用utf-8编码。

## 解决办法

### 1. Javascript函数：escape()

escape()不能直接用于URL编码，它的真正作用是返回一个字符的Unicode编码值。

```javascript
    escape("春节")
    // "%u6625%u8282"
```

它的具体规则是，除了ASCII字母、数字、标点符号"@ * _ + - . /"以外，对其他所有字符进行编码。在\u0000到\u00ff之间的符号被转成%xx的形式，其余符号被转成%uxxxx的形式。对应的解码函数是unescape()。

--- 

注意，escape不对"+"编码，但是我们知道，网页在提交表单的时候，如果有空格，则会被转化为+字符。服务器处理数据的时候，会把+号处理成空格。所以，使用的时候要小心

### 2. Javascript函数：encodeURI()

它着眼于对整个URL进行编码，因此除了常见的符号以外，对其他一些在网址中有特殊含义的符号"; / ? : @ & = + $ , #"，也不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%。)

```javascript
encodeURI("春节")
"%E6%98%A5%E8%8A%82"

// 它对应的解码函数是decodeURI()。

decodeURI("%E6%98%A5%E8%8A%82")
"春节"


encodeURI("春'节")
"%E6%98%A5'%E8%8A%82"

// 需要注意的是，它不对单引号'编码。

decodeURI("%E6%98%A5'%E8%8A%82")
"春'节"
```

### 3. Javascript函数：encodeURIComponent()

最后一个Javascript编码函数是encodeURIComponent()。与encodeURI()的区别是，它用于对URL的组成部分进行个别编码，而不用于对整个URL进行编码。
因此，"; / ? : @ & = + $ , #"，这些在encodeURI()中不被编码的符号，在encodeURIComponent()中统统会被编码。至于具体的编码方法，两者是一样。

```javascript
encodeURIComponent("www.baidu@.com")
"www.baidu%40.com"

// 对应的解码函数为decodeURIComponent

decodeURIComponent("www.baidu%40.com")
"www.baidu@.com"
```

---

> 内容总结来自于 阮一峰老师博客
> 
> [关于URL编码](http://www.ruanyifeng.com/blog/2010/02/url_encoding.html)

(完)