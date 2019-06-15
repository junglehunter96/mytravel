<template>
  <div class="header">
    <div class="header-left" @click="backhome">
      <span class="icon iconback"></span>
    </div>
    <div class="title">
      国内城市选择
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      backhome() {
        this.$router.push('/')
      }
    },
  }
</script>

<style lang="stylus" scoped>
 @import '~styles/varibles.styl'
  .header
    position relative
    height .88rem
    line-height .88rem
    text-align center
    background $bgColor
    color #fff
    .header-left
      position absolute 
      width .4rem
      left .2rem
      .iconback
        font-size .4rem
</style>