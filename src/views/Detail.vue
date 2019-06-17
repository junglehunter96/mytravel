<template>
  <div class="detail">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
  </div>
</template>

<script>
import DetailBanner from 'components/detail/Banner'
import DetailHeader from 'components/detail/Header'
import DetailList from 'components/detail/List'
  export default {
    data() {
      return {
        list: []
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    }
  }
</script>

<style lang="stylus" scoped>
  .detail
    height 50rem
</style>