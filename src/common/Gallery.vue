<template>
  <div class="gallery" @click.stop="handleGalleryClick">
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="(item, index) in imgList"
        :key="index"
      >
        <img
          class="sliderImg"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <div
        class="swiper-pagination"
        slot="pagination"
      >
      </div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true,
      },
      imgList: [{
        id: '001',
        imgUrl: '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
      }]
    }
  },
  methods: {
    handleGalleryClick() {
      this.$emit('GalleryClick')
      console.log('galleryclick')
    }
  },
}
</script>

<style lang="stylus" scoped>
 .gallery>>>.swiper-container
   overflow inherit
.gallery 
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  margin: auto
  display: flex
  flex-direction: column
  justify-content: center
  background: #000
  .swiper-pagination
    bottom -3rem
    color #fff
  .sliderImg 
    width: 100%
</style>