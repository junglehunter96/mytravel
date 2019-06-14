<template>
  <div class="recommond">
    <div class="like-list">
      <div class="like-tit">猜你喜欢</div>
      <div class="like-item">
        <div class="img-wrapper">
          <img class="item-img"  src="http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg">
        </div>
        <div class="item-content">
          <div class="item-name">西湖国家湿地公园</div>
          <div class="item-eva"><span></span>286条评价</div>
          <div class="item-ifo">
            <div>
            <span class="ye">￥</span><span class="item-prise">70</span>起
            </div>
            <div class="item-site">杭州</div>
          </div>
        </div>
      </div>
      <div class="week-list">
        <div class="like-tit">周末去哪儿</div>
        <div class="week-i">
          <div class="week-wrapper">
            <img class="week-img" src="http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg"/>
          </div>
          <div class="week-info">
            <div class="week-name">美丽普陀山</div>
            <div class="week-desc">人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
  .recommond
    display flex
    flex-flow column nowrap
    margin-top: 0.25rem
    .like-list
      display flex
      flex-direction column
      .like-tit
        background-color : #f4f4f4
        height .65rem
        line-height .65rem
        font-size: .28rem
        padding-left .32rem
      .like-item
        display flex
        margin .24rem 0 .24rem .24rem
        
        .img-wrapper
          width 2rem
          height 2rem
          margin-right .14rem
          .item-img
            width 100%
            height 100%
        .item-content
          flex 1
          display flex
          flex-direction column
          padding 0 .05rem
          .item-name
            height .44rem
            margin-top .26rem
            line-height .44rem
            font-size .32rem
          .item-eva
            height .32rem
            margin-top .14rem
            font-size .24rem
            color #616161
          .item-ifo
            position: relative
            margin-top: .22rem
            color: #616161
            font-size: .24rem
            line-height: .4rem
            .ye
              color #ff8300
            .item-prise
              font-size .4rem
              color #ff8300
            .item-site
              position absolute 
              bottom 0
              right .2rem
    .week-list
      display flex
      flex-direction column
      .week-i
        margin-bottom: .1rem
        .week-img
          width 100%
        .week-info
          position: relative;
          padding: .14rem 1.4rem .2rem .2rem;
          font-size: .28rem;
          line-height: .48rem;
          .week-desc
            
            font-size: .24rem
            overflow: hidden
            white-space : nowrap
            text-overflow : ellipsis
          

</style>