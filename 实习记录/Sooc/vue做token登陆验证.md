## index.vue

```js
home.login(this.ruleForm).then(res => {
  console.log(res.data.data.token)
  let token = res.data.data.token
  util.session('token', token)
  this.$emit('login')
})
```

## app.vue

```js
methods: {
  signin: function(token) {
    //全局挂载
    let localUser = util.session('token');
    this.$root.token = localUser;
    //设置请求头统一携带token
    instance.defaults.headers.common["Authorization"] = token;
  },  
getUserToken: function(){
    let localUser = util.session('token');
    if(localUser){
        this.signin(localUser);
    }
  }
},
created: function() {
  this.$on('login').getUserToken()
  this.getUserToken();
}
```