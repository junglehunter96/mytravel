<template>
  <swiper class="icon">
    <swiper-slide
      class="page"
      v-for="(page,index) in pages"
      :key="index"
    >
      <div
        class="iconitem"
        v-for="item in page"
        :key="item.id"
      >
        <img
          class=iconimg
          :src="item.imgUrl"
        />
        <div class="keyword">{{item.desc}}</div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      iconList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          desc: '景点门票'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/17/99402a22ce4af302.png',
          desc: '西湖'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          desc: '杭州必游'
        }, {
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
          desc: '漂流'
        }, {
          id: '005',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
          desc: '西沙湿地'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = [];
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
}
</script>

<style lang="stylus" scoped>
.icon {
  height: 3.2rem;

  .iconitem {
    float: left;
    width: 25%;
    height: 1.5rem;
    padding-top: 0.1rem;
    text-align: center;

    .iconimg {
      width: 1.1rem;
      height: 1.1rem;
    }

    .keyword {
      margin-top: 0.1rem;
      font-size: 14px;
      text-overflow: ellipsis
      overflow: hidden
      white-space: nowrap
    }
  }
}
</style>