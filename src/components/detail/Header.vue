<template>
  <div class="header">
    <div
      class="backHome"
      @click.stop="backHome"
      v-show="showHeader"
    >
      <span class="icon iconback"></span>
    </div>
    <div
      class="shadowheader"
      v-show="!showHeader"
    >
      <span
        class="icon iconback header-icon"
        @click.stop="backHome"
        :style = "headerStyle"
      ></span>
      景点详情</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showHeader: true,
      headerStyle: {
        opacity : 0
      }
    }
  },
  methods: {
    backHome () {
      this.$router.push({
        name: 'home'
      })
    },
    handerScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.headerStyle = { opacity }
        this.showHeader = false
      } else {
        this.showHeader = true 
      }
    }
  },
  activated () {
    
    window.addEventListener('scroll', this.handerScroll)
  },
  deactivated() {
    window.removeEventListener('scroll',this.handerScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .backHome 
    position: absolute;
    overflow: hidden;
    width: 1rem;
    height: 1rem;
    top: 0.2rem;
    left: 0.2rem;
    .iconback 
      font-size: 0.4rem;
      color: #fff;
  .shadowheader 
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
    text-align: center;
    .header-icon 
      position: absolute;
      left: 0.2rem;
      top: 0;
    
  
</style>