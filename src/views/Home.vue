<template>
  <div>
    <home-header></home-header>
    <swiper></swiper>
    <icont></icont>
    <recommond></recommond>
  </div>
</template>

<script>
  import HomeHeader from '@components/home/Header'
  import Swiper from '@components/home/Swiper'
  import Icont from '@components/home/Icont'
  import Recommond from '@components/home/Recommond'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      HomeHeader,
      Swiper,
      Icont,
      Recommond
    }
  }
</script>

<style lang="stylus" scoped>

</style>