<template>
  <div class="singer">
    <scroll ref="scroll" @scroll="scroll">
      <ul class="singerList">
        <li v-for="(item,index) in singer" :key="index" ref="list">
          <h3 class="item-title">{{item.title}}</h3>
          <div class='item' v-for='(item,index) in item.item' :key='index' @click="toDetail">
            <div class="singerImg">
              <img :src="item.img" >
            </div>
            <div class="singerName">{{item.name}}</div>
          </div>
        </li>
      </ul>
      <ul class="singerNav">
        <li v-for="(item,index) in singer" :key="index" :class="{'active':item.title==='热门'}" @click="scrollToElement(index)" ref="btn">
          {{item.title==='热门'?'热':item.title}}
        </li>
      </ul>
      </scroll>
  </div>
</template>

<script>
export default {
  name: 'geshou',
  data () {
    return {
      singer: {},
      foodList: [],
      scrollY: 0
    }
  },
  created () {
    this.$axios('/apis/singer').then(res => {
      this.singer = this._list(res.data.data.list)
    })
  },
  mounted () {
    setTimeout(() => {
      this._scroll()
    }, 20)
  },
  methods: {
    toDetail () {
      this.$router.push({
        path: `/index/tuijian/${12312312}`
      })
    },
    _list (list) {
      let map = {}
      map['hot'] = {
        title: '热门',
        item: []
      }
      list.forEach((item, index) => {
        if (index < 10) {
          map['hot'].item.push({
            'name': item.Fsinger_name,
            'id': item.Fsinger_id,
            'img': `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
          })
        }
        let key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            item: []
          }
        }
        map[key].item.push({
          'name': item.Fsinger_name,
          'id': item.Fsinger_id,
          'img': `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
        })
      })
      delete map['9']
      let arr = []
      let hot = []
      for (let i in map) {
        if (i === 'hot') {
          hot.push(map[i])
        } else {
          arr.push(map[i])
        }
      }
      arr.sort((a, b) => {
        return a.title.charCodeAt() - b.title.charCodeAt()
      })
      return hot.concat(arr)
    },
    scrollToElement (index) {
      let list = this.$refs.list
      let scroll = this.$refs.scroll
      let btn = this.$refs.btn
      btn.forEach((item, i) => {
        btn[i].classList.remove('active')
      })
      btn[index].classList.add('active')
      scroll.scrollToElement(list[index], 500)
    },
    scroll (y) {
      let btn = this.$refs.btn
      this.scrollY = Math.abs(y)
      for (let i = 0; i < this.foodList.length - 1; i++) {
        btn[i].classList.remove('active')
        if (this.scrollY >= this.foodList[i] && this.scrollY < this.foodList[i + 1]) {
          btn[i].classList.add('active')
        }
      }
    },
    _scroll () {
      let list = this.$refs.list
      let h = 0
      this.foodList.push(h)
      list.forEach((item, index) => {
        h += item.clientHeight
        this.foodList.push(h)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .singer{
    flex:1;
    background:#282828;
    position:relative;
    overflow: hidden;
    .singerList{
      width:100%;
      .item-title{
        box-sizing:border-box;
        font-size: 12px;
        padding: 8px 16px;
        color:#949494;
        background: #363636;
        margin-bottom:19px;
      }
     .item{
        box-sizing:border-box;
        padding:0px 28px 19px 28px;
        display:flex;
        flex-direction: row;
        .singerImg{
          width:47px;
          height:47px;
          img{
            display:block;
            width:100%;
            height:100%;
            border-radius:50%;
          }
        }
        .singerName{
          height:47px;
          line-height:47px;
          font-size:13px;
          color:#949494;
          margin-left:16px;
        }
     }
    }
    .singerNav{
      position:fixed;
      right:0;
      top:145px;
      background: rgba(0,0,0,.5);
      width:20px;
      padding:18px 0;
      border-radius:10px;
      li{
        height:18px;
        line-height:18px;
        text-align:center;
        font-size:12px;
        color:#949494;
      }
      li.active{
        color:#ffd932;
      }
    }
  }
</style>
