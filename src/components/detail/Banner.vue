<template>
  <div
    class="banner"
    @click.stop="handleBannerClick"
  >
    <div class="wrapper">
      <img
        class="bannerImg"
        :src="bannerImg"
      />
      <div class="imgInfo">
        <div class="sightName">{{sightName}}</div>
        <div class="imgNumber"><span class="icon iconphoto"></span> {{gallaryImgs.length}}</div>
      </div>
    </div>
    <fade>
      <gallery
        v-show="showGallery"
        @gallaryclose="handleGalleryClick"
        :imglist="gallaryImgs"
      ></gallery>
    </fade>
  </div>
</template>

<script>
import Gallery from 'common/Gallary'
import Fade from 'common/FadeAnimation'
export default {
  name: 'banner',
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: [Array,String]
  },
  data () {
    return {
      showGallery: false
    }
  },
  components: {
    Gallery,
    Fade
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClick () {
      this.showGallery = false
    }
  },
}
</script>

<style lang="stylus" scoped>
.banner {
  .wrapper {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;

    .bannerImg {
      width: 100%;
    }

    .imgInfo {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));

      .sightName {
        font-size: 0.36rem;
        margin-left: 0.5rem;
        margin-bottom: 0.2rem;
      }

      .imgNumber {
        position: absolute;
        right: 0.5rem;
        bottom: 0.2rem;
        font-size: 0.3rem;
      }
    }
  }
}
</style>