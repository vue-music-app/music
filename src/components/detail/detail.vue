<template>
  <div class="detail">
    <div class="header">
      <img :src="songList.logo" class="headimg">
      <span class="icon iconfont" @click="back">&#xe60b;</span>
      <div class="top">{{songList.dissname}}</div>
      <div class="bottomplay">
        <span class="iconfont icon-play"></span>
        <span>随机播放全部</span>
      </div>
    </div>
    <div class="list-scroll">
    <scroll ref="sss">
      <ul class="list1">
        <li class="item" v-for='(item,index) in songList.songlist' :key="index">
          <div class="item-name">{{item.songname}}</div>
          <div class="item-cons">{{item.albumname}}</div>
        </li>
      </ul>
    </scroll>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail',
  data () {
    return {
      id: '',
      songList: []
    }
  },
  methods: {
    back () {
      this.$router.back()
    }
  },
  async created () {
    this.id = this.$route.params.id
    this.songList = (await this.$axios('/apis/songData')).data.cdlist[0]
    // console.log(this.songList)
  }
}
</script>

<style scoped lang='scss'>
  .detail{
    width:100vw;
    height:100vh;
    background: #282828;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    display: flex;
    flex-direction: column;
    .header{
      width:100%;
      height:200px;
      position: relative;
      background: rgba(0,0,0,.2);
      .headimg{
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;
      }
      .icon{
        color:#ffd932;
        position:absolute;
        font-size:16px;
        top:10px;
        left:12px;
      }
      .top{
        color:#fff;
        text-align:center;
        line-height:36px;
        font-size:14px;
        font-weight:600;
      }
      .bottomplay{
        position:absolute;
        bottom:20px;
        left:50%;
        margin-left:-60px;
        width:120px;
        height:30px;
        line-height:26px;
        text-align:center;
        color:#ffd932;
        font-size:10px;
        border:2px solid #ffd932;
        border-radius:20px;
        span{
          vertical-align: middle;
        }
      }
    }
    .list-scroll{
     flex:1;
     overflow:hidden;
     .list1{
      box-sizing:border-box;
      padding:10px 19px;
      .item{
        font-size:15px;
        box-sizing: border-box;
        padding:14px 0;
        .item-name{
         color:#fff;
         margin-bottom:10px;
        }
        .item-cons{
          color:#6c6c6c;
        }
      }
    }
    }
  }
</style>
