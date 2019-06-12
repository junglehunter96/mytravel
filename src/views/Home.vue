<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
  </div>
</template>

<script>
  import HomeHeader from '@components/home/Header'
  import Swiper from '@components/home/Swiper'

  export default {
    data() {
      return {
        
      }
    },
    components: {
      HomeHeader,
      Swiper
    }
  }
</script>

<style lang="stylus" scoped>

</style>