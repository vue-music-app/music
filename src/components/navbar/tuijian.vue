<template>
  <div class="tuijian">
    <scroll>
      <div>
        <div class="slider">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for='(item,index) in arr' :key='index' :data-id='item.id'>
              <img :src="item.picUrl" >
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
        <div class="title">热门歌单推荐</div>
         <div class="loading" v-if='!hot.length'>
          <img src="../../assets/img/sliderLoading.gif" alt="">
        </div>
        <div class="commend" v-else>
          <ul class="list">
            <li class="item" v-for='(item,index) in hot' :key='index' @click="toDetail(item)">
              <div class="imgbox">
                <img v-lazy="item.imgurl">
              </div>
              <div class="item-info">
                <div class="info-name">{{item.creator.name}}</div>
                <div class="info-class">{{item.dissname}}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </scroll>
    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
export default {
  name: 'tuijian',
  data () {
    return {
      arr: [],
      hot: [],
      swiperOption: {
        loop: true,
        autoplay: 2000,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        pagination: {
          el: '.swiper-pagination'
        },
        observer: true,
        grabCursor: true
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toDetail (obj) {
      this.$router.push({
        path: `/index/tuijian/${obj.dissid}`
      })
    }
  },
  async created () {
    this.hot = (await this.$axios('/apis/hotData')).data.data.list
    this.arr = (await this.$axios('/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540275028512')).data.data.slider
  }
}
</script>

<style lang='scss'>
  .slide-enter,.slide-leave-to{
    transform: translateX(100vw)
  }
  .slide-enter-active,.slide-leave-active{
    transition:all .5s;
  }
  .slide-enter-to,.slide-leave{
    transform: translateX(0)
  }
  .tuijian{
    flex:1;
    color:#fff;
    display:flex;
    flex-direction: column;
    .loading{
      width:100%;
      height:100%;
      img{
        width:100%;
        height:100%;
      }
    }
    .slider{
      height:150px;
    }
    .swiper-container{
      height:150px;
      .swiper-slide{
        img{
          width:100%;
          height:100%;
        }
      }
      .swiper-pagination{
       .swiper-pagination-bullet{
          background: #8e8a91;
          border-radius:5px;
          transition:width 0.3s;
       }
       .swiper-pagination-bullet-active{
          width:20px;
          background: #fff;
       }
      }
    }
    // 热门推荐
    .title{
      font-size:13px;
      font-weight:600;
      color:#ffd932;
      line-height:61px;
      text-align:center;
      }
    .commend{
      flex:1;
      // height:425px;
      overflow:hidden;
      .list{
        box-sizing: border-box;
        padding:0 15px;
        .item{
          display:flex;
          flex-direction: row;
          margin-bottom:20px;
          .imgbox{
            width:59px;
            height:59px;
            img{
              display: block;
              width:100%;
              height:100%;
            }
          }
          .item-info{
            flex:1;
            margin-left:17px;
            .info-name{
              line-height:35px;
              font-size:14px;
            }
            .info-class{
              line-height:25px;;
              font-size:15px;
              color:#656565;
            }
          }
        }
      }
    }
  }
</style>
