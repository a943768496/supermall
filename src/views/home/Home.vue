<template>
  <div class="home">
    <home-nav-bar/>
    <tab-control :titles="titles"
                 :class="{'control-hide': !isFixed}"
                 class="control-fixed"
                 :current-index="currentIndex"
                 @titleClick="titleClick"/>
    <scroll class="content"
            @scroll="contentScroll"
            :probe-type="3"
            :pull-up-load="true"
            @pullingUp="pullingUp"
            ref="scroll">
      <home-swiper :banner="banner"></home-swiper>
      <recommend :recommend="recommend"/>
      <home-feature/>
      <tab-control
        :titles="titles"
        ref="tabcontrol"
        class="control-normal"
        :current-index="currentIndex"
        @titleClick="titleClick"/>
      <goods-list :goods="goods[currentType[currentIndex]].list"/>
    </scroll>
    <back-top v-show="isTop" @click.native="toTop"/>
  </div>
</template>

<script>
  import HomeNavBar from './childComps/HomeNavBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import Recommend from './childComps/Recommend'
  import HomeFeature from './childComps/HomeFeature'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabcontrol/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'
  import BackTop from '../../components/common/backtop/BackTop'

  import {getHomeMultidata, getHomeGoods} from 'network/home'
  import {debounce} from 'common/utils'

  export default {
    name: "Home",
    components: {
      HomeNavBar,
      HomeSwiper,
      Recommend,
      HomeFeature,
      TabControl,
      GoodsList,
      Scroll,
      BackTop,
    },
    data() {
      return {
        banner: [],
        recommend: [],
        titles: ['流行', '新款', '精选'],
        isFixed: false,
        currentIndex: 0,
        currentType: ['pop', 'new', 'sell'],
        goods: {
          'pop': {page: 1, list: []},
          'new': {page: 1, list: []},
          'sell': {page: 1, list: []}
        },
        imgLoadListener: null,
        isTop: false,
        saveY: 0
      }
    },
    created() {
      this.getHomeMultidata()

      this.$nextTick(() => {
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      })

    },
    mounted() {
      this.imgLoadListener = debounce(this.$refs.scroll.refresh, 100)
    },
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$bus.$on('imageLoad', this.imgLoadListener)
    },
    deactivated() {
      this.saveY = this.$refs.scroll.getScrollY()
      this.$bus.$off('imageLoad', this.imgLoadListener)
    },
    methods: {
      contentScroll(position) {
        this.isFixed = (-position.y >= this.$refs.tabcontrol.$el.offsetTop)
        this.isTop = (-position.y >= 1000)
      },
      titleClick(index) {
        this.currentIndex = index
      },
      pullingUp() {
        let type = this.currentType[this.currentIndex]
        this.getHomeGoods(type)
      },
      toTop() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },

      // 网络请求
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banner = res.data.banner.list
          this.recommend = res.data.recommend.list
        })
      },
      getHomeGoods(type) {
        let page = this.goods[type].page
        getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page ++
          this.$refs.scroll.finishPullUp()
        })
      }

  }

  }
</script>

<style scoped>
  .home {
    position: relative;
    height: calc(100vh - 49px);
  }
  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    height: 100%;
  }
  .control-hide {
    display: none;
  }
  .control-normal {
    background: white;
    z-index: 1;
  }
  .control-fixed {
    position: fixed;
    top: 43px;
    background: white;
    z-index: 2;
  }
</style>