<template>
    <div class="box">
        <div class="user iconfont icon-user"></div>
        <div class="header">
          <span class="iconfont icon-play"></span>
          music player
        </div>
        <ul class="navbar">
          <li>
            <router-link to="/index/tuijian">推荐</router-link>
          </li>
          <li>
            <router-link to="/index/geshou">歌手</router-link>
          </li>
          <li>
            <router-link to="/index/paihang">排行</router-link>
          </li>
          <li>
            <router-link to="/index/sousuo">搜索</router-link>
          </li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang='scss'>
  .box{
    width:100vw;
    height:100vh;
    background: #282828;
    color:#ffd932;
    display:flex;
    flex-direction: column;
    .user{
      position:absolute;
      top:10px;
      right:10px;
      width:21px;
      height:21px;
      font-size:20px;
      font-weight: 600;
    }
    // 头部
    .header{
      font-weight: 600;
      height:42px;
      line-height:42px;
      font-size:18px;
      vertical-align:middle;
      text-align:center;
      span{
        font-size:27px;
        vertical-align:middle;
        margin-right:20px;
      }
    }
    //导航条
    .navbar{
      display:flex;
      flex-direction: row;
      margin-top:16px;
      justify-content: space-around;
      margin-bottom:5px;
      li{
        text-align:center;
        a{
          display:inline-block;
          color:#979797;
          font-weight:600;
          font-size:14px;
          padding-bottom:6px;
          border-bottom:2px solid #282828;
        }
        a.active{
          color:#ffd932;
          border-bottom:2px solid #ffd932;
        }
      }
    }
  }
</style>
