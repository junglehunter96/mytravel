<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icont></icont>
  </div>
</template>

<script>
  import HomeHeader from '@components/home/Header'
  import Swiper from '@components/home/Swiper'
  import Icont from '@components/home/Icont'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      HomeHeader,
      Swiper,
      Icont
    }
  }
</script>

<style lang="stylus" scoped>

</style>