<template>
  <div class="recommond">
    <div class="like-list">
      <div class="like-tit">猜你喜欢</div>
      <div class="like-item border-bottom" v-for="(item,index) in recommondList" :key="index">
        <div class="img-wrapper">
          <img class="item-img"  :src="item.imgUrl">
        </div>
        <div class="item-content">
          <div class="item-name">{{item.desc}}</div>
          
          <div class="item-ifo">
            <div>
            <button class="item-button">查看详情</button>
            </div>
            <div class="item-site">{{item.site}}</div>
          </div>
        </div>
      </div>
      <div class="week-list">
        <div class="like-tit">周末去哪儿</div>
        <div class="week-i border-bottom" v-for="(el,index) of weekList" :key="index">
          <div class="week-wrapper">
            <img class="week-img" :src="el.imgUrl"/>
          </div>
          <div class="week-info">
            <div class="week-name">{{el.name}}</div>
            <div class="week-desc">{{el.desc}}</div>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recommondList: [
          {
            id: '001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1904/a2/a23ae48aac0c0ab2a3.water.jpg_200x200_38cef490.jpg',
            desc: '西湖国家湿地公园',
            site:'杭州'

          }
        ],
        weekList:[
          {
            id:'001',
            imgUrl:'http://img1.qunarzz.com/sight/source/1811/52/b6776b49d27025.jpg_r_640x214_35ae205c.jpg',
            name:'美丽普陀山',
            desc:'人间仙境杭州，佛教圣地普陀山等你来玩！在这里静心接收佛家的洗礼，用心感受佛文化'
          }
        ]
      }
    },
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
            .item-button
              font-size .3rem
              background-color #fff
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