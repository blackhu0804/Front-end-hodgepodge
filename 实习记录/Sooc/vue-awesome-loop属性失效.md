```js
<template>
    <div>
        //第一个轮播   加了v-if 判断，可以实现 loop 轮循
        <swiper v-if="gglist.length>1" :options="swiperOption" ref="mySwiper" class="swiper-box">
            <!-- slides -->
            <swiper-slide v-for="m in gglist">{{m}}</swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
        ////第二个轮播  没加判断  不能实现loop  可试试看
        <swiper :options="swiperOption" ref="mySwiper2" class="swiper-box">
            <!-- slides -->
            <swiper-slide v-for="m in gglist">{{m}}</swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
  import Vue from 'vue'
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.min.css'
  Vue.use(VueAwesomeSwiper)

  export default{
      components: {
          swiper:VueAwesomeSwiper.swiper,
          swiperSlide:VueAwesomeSwiper.swiperSlide
      },
      data(){
          return{
              //配置
              swiperOption: {
                loop : true,
                speed: 900,
                notNextTick: true,
                autoplay:true,
                preloadImages: false,
                pagination: {
                  el: '.swiper-pagination',
                },
                paginationClickable :true,
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              },
              gglist:[],//存放的数据list
          }
      },
      mounted:function(){
          //这是我拿的代理地址的数据，你们需要换成自己的api地址
          Vue.axios.get('/api/trade/***').then((response) => {
            console.log(response);
            this.gglist = response.data.zbGongGao;
          })
      }
  }
</script>
```