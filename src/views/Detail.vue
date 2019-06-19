<template>
  <div>
    <detail-banner 
    :bannerImg = "bannerImg"
    :sightName = "sightName"
    :gallaryImgs = "gallaryImgs">
    </detail-banner>
    <detail-header></detail-header>
    <detail-list 
    :list="list"></detail-list> 
  </div>
</template>

<script>
import DetailBanner from 'components/detail/Banner'
import DetailHeader from 'components/detail/Header'
import DetailList from 'components/detail/List'

  export default {
    name: 'Detail',
    data() {
      return {
        list: [],
        bannerImg: '',
        sightName: '',
        gallaryImgs: []
      }
    },
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    },
    methods: {
      getList() {
        this.$axios.get('/api/detail.json',{
          params:{
            id: this.$route.params.id
          }
        })
        .then(this.getDataSuccess)
      },
      getDataSuccess(res) {
        res = res.data
        if(res.ret && res.data) {
          const data = res.data
          this.list = data.categoryList
          this.bannerImg = data.bannerImg
          this.sightName = data.sightName
          this.gallaryImgs = data.gallaryImgs
          
        }
        
        
      }
    },
    mounted () {
      this.getList();
    },
  }
</script>

<style lang="stylus" scoped>
 
</style>