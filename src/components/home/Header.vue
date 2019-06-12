<template>
  <div class="header">
    <div class="header-left">
      <span class="icon iconback back-icon"></span>
    </div>
    <div class="header-input">
      <span class="icon iconsearch search"></span>
      <input type="text" name="search" placeholder="输入城市/景点/游玩主题">
    </div>
    <div class="header-right">
      <div>城市<span class="icon icondown arrow-icon"></span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<style lang="stylus" scoped>
@import '~@styles/varibles.styl';
.header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      display : flex
      justify-content : center
      width: .64rem
      .back-icon
        font-size: .45rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
      .search
        margin-right: .1rem
    .header-right
      min-width: 1.04rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      
         
    
</style>