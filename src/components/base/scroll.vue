<template>
  <div class="scroll" ref="ss">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  mounted () {
    this.scroll = new BScroll(this.$refs.ss, {
      probeType: 3,
      click: true,
      mouseWheel: true
    })
    this.scroll.refresh()
    this.scroll1()
  },
  methods: {
    scrollToElement (...payload) {
      this.scroll.scrollToElement(...payload)
    },
    scroll1 () {
      this.scroll.on('scroll', (a) => {
        this.$emit('scroll', a.y)
      })
    }
  }
}
</script>

<style scoped>
  .scroll{
    height:100%;
    overflow:hidden;
  }
</style>
