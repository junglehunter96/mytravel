<template>
  <div class="banner" @click.stop="handleBannerClick">
    <div class="wrapper">
      <img class="showImg" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" />
      <div class="imgInfo">
        <div class="imgName">故宫(AAA景区)</div> 
        <div class="imgNumber"><span class="icon iconphoto"></span> 8</div> 
      </div>
    </div>
    <gallery v-show="showGallery" @GalleryClick = 'handleGalleryClick'></gallery>
  </div>
</template>

<script>
import Gallery from 'common/Gallery'
  export default {
    name: 'banner',
    data() {
      return {
        showGallery: false
      }
    },
    components: {
      Gallery,
    },
    methods: {
      handleBannerClick() {
        this.showGallery = true
      },
      handleGalleryClick() {
        this.showGallery = false
      }  
    }
  }
</script>

<style lang="stylus" scoped>
 .banner
  .wrapper
    position relative
    width 100%
    height 0
    padding-bottom 55%
    .showImg
      width 100%
    .imgInfo
      position absolute
      bottom 0
      left 0
      right 0
      color #fff
      background linear-gradient(to top,rgba(0,0,0,.8),rgba(0,0,0,0))
      .imgName
        font-size .36rem
        margin-left .5rem
        margin-bottom .2rem
      .imgNumber
        position absolute 
        right .5rem
        bottom .2rem
        font-size .3rem 
</style>