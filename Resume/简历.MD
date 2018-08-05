# 联系方式

* 应聘职位：Web前端开发工程师
* 手机：15563853050
* Email：812510003@qq.com
* QQ/微信号：812510003/dxp222333

# 个人信息

* 胡天浩/男/1997
* 本科/鲁东大学软件工程系
* 英语：CET-4
* 技术博客：https://github.com/hu970804/Learn-notes/issues
* Github：https://github.com/hu970804
* 期望城市：上海

# 实习经历

## 山东新位来教育科技有限公司 （ 2018年3月 ~ 2018年7月 ）

### PC端

功能介绍：公司主要业务为校园招聘平台，提供企业招聘信息，学生可在线投递简历。参与PC端项目有三个部分，分别为门户网站、公司端管理平台、学校端管理平台。

技术细节：主要应用的是基于 `JQuery`封装的 `MVC` 框架开发，根据UI图转化为 `HTML` 页面，使用`Less` 编写css样式，使用基于 `JQuery` 封装的 `Model` 组件调用后端接口，根据请求接口得到的数据使用 `Mustache` 模板引擎将数据渲染到页面。门户和学校端采用 `Gulp` 打包，公司端管理平台采用 ` Webpack`打包。在公司线上招聘会研发过程中完成PC端线上招聘会入场券的页面的编写和实现入场券的购买，此外还完成公司HR芝麻信用认证的功能，增加公司招聘的可靠性。

技术栈：Less / JQuery / Mustache / Gulp / Webpack

### 小程序

功能介绍：小程序主要为求职者查看公司招聘职位，查看宣讲会，在线编辑投递简历等功能。

技术细节：采用 `Wepy` 进行开发，根据设计图完成了部分页面的编写，通过调用接口完成部分页面数据的渲染。将 tab切换、职位信息 等复用性高的代码进行组件封装，减少代码冗余，提高了代码重用性。

技术栈：Wepy / Less

# 开源作品

以下是部分主要项目，其余均可在Github上查看，点击项目名字进入Github项目地址。

#### [动手画一个皮卡丘](https://github.com/hu970804/Pikachu)

功能介绍：通过使用 `HTML` 和 `CSS` 实现一个皮卡丘效果，然后通过 `JavaScript` 模拟代码打字效果，实现画一个皮卡丘的过程,使用 `Prism.css` 实现代码高亮效果。

技术细节：使用 `HTML` 和 `CSS` 画出一个皮卡丘，使用 `CSS` 进行皮卡丘的各个部位样式编写，使用 `JavaScript` 的 `substring` 方法截取代码，通过 `setTimeout` 实现模拟打字效果，使用 `Prism.css` 给代码添加特定类名实现代码高亮效果。

技术栈：HTML / CSS / JavaScript / Prism

[点击预览](http://www.blackhu.site/Pikachu/)

#### [移动端豆瓣电影](https://github.com/hu970804/Mobile-douban-movie/)

功能介绍：展示豆瓣评分排名前250的电影、展示北美电影排行榜、展示近期即将上映电影、提供搜索电影功能，将搜索到的相关的电影展示出来、页面上所展示的电影条目都可以通过点击跳转到豆瓣电影的详细介绍

技术细节：使用 `HTML` 和 `CSS` 编写页面和样式，使用 `JQuery` 调用豆瓣提供的API，使用模块化的思想编写JS代码，采用 `JSONP` 的方式解决跨域，使用`Webpack` 进行代码的合并和压缩。

技术栈：HTML / CSS / JQuery / Webpack

[点击预览](http://www.blackhu.site/Mobile-douban-movie/)

#### [移动端Vue商城](https://github.com/hu970804/Maijia)

功能介绍：使用 `Vue.js` 编写的移动端商城，页面为直接保存的移动端有赞商城页面，对移动端有赞商城进行了Vue重构，主要实现了商城首页、分类页、商品详情页、购物车页、以及地址管理页的大部分功能，利用 `RAP2` 接口管理平台Mock数据。

技术细节：使用`mint-ui`、`swiper` 、`velocity-animate` 等插件实现了页面轮播图以及购物车商品左滑删除的功能，将轮播单独进行组件封装为 `Swipe` 组件，将底部tab切换封装为 `Foot`组件，使用 `axios` 实现对接口的调用，在地址管理页面使用`Vue-Router` 实现了新增地址、地址编辑的页面路由，使用 `Vuex` 实现了地址的信息管理。

技术栈：Vue.js / Mint-UI / axios / Vue-Router / Vuex

[点击预览](http://www.blackhu.site/Maijia/dist/index.html)

### [基于Socket.io的聊天室](https://github.com/hu970804/node-chat)

功能介绍：这是一个基于 `Node.js` 和 `Socket.io` 的网页聊天室，主要实现了文字信息和图片的发送，以及用户登陆离开的提醒，此外添加了图灵机器人进行对话。

技术细节：`Socket.io` 是基于 `WebSocket` 封装的一个库，通过使用 `Socket.io` 可以方便的实现前后端的通信，使用 `Express` 作为后端服务器框架，通过 `axios` 调用图灵机器人API，当接收到小图两个字时，调用API，实现对话。

技术栈：Express / Socket.io / 图灵机器人API

[点击预览](http://140.143.65.13:3000/)

#### [V2ex微信小程序](https://github.com/hu970804/wechat-v2ex)

功能介绍：通过调用 V2EX 开源的API，实现了获取最新文章，最热文章，所有节点，文章详情等的数据展示。 

技术细节：此项目采用原生微信小程序，使用WXML、WXSS编写页面和样式，通过JavaScript实现V2EX的API调用，将数据显示到页面上。

# 技能清单

* 熟悉HTML，CSS，JavaScript
* 熟悉jQuery、Vue前端框架
* 熟悉Git版本管理工具
* 熟悉Less、Sass预编译CSS
* 有微信小程序的开发经验
* 了解Gulp、Webpack，有一定的使用经验

- - -

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。