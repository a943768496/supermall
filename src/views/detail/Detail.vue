<template>
  <div class="detail">

    <detail-nav-bar :titles="titles"
                    :current-index="currentIndex"
                    @navBarClick="navBarClick"/>
    <scroll class="content"
            ref="scroll"
            :probe-type="3"
            @scroll="contentScroll">
      <detail-swiper :top-images="topImages"/>
      <detail-goods :goods="goods" v-if="goods.services"/>
      <detail-shop :shop="shop" v-if="shop.score"/>
      <detail-info :detail-info="detailInfo"
                   :detail-desc="detailDesc"
                   v-if="detailDesc !== ''"
                   @imageLoad="imageLoad"/>
      <detail-params :detail-params="detailParams"
                     v-if="detailParams.info"
                     ref="params"/>
      <detail-comment :detail-comment="detailComment"
                      v-if="detailComment.user"
                      ref="comment"/>
      <goods-list :goods="recommend"
                  v-if="recommend.length !== 0"
                  ref="recommend"/>
    </scroll>
    <back-top @click.native="backTop" :class="{'back-top': isTop}"/>

    <div class="blur" v-if="isBlur"></div>
    <detail-tab-bar class="detail-tab-bar"
                    :iid="iid"
                    @addCart="addCart"
                    @cartClose="cartClose"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailGoods from './childComps/DetailGoods'
  import DetailShop from './childComps/DetailShop'
  import DetailInfo from './childComps/DetailInfo'
  import DetailParams from './childComps/DetailParams'
  import DetailComment from './childComps/DetailComment'
  import GoodsList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/common/backtop/BackTop'
  import DetailTabBar from './childComps/DetailTabBar'

  import {getDetail, goods, shop, detailParams, getRecommend} from 'network/detail'
  import {debounce} from 'common/utils'

  export default {
    name: "Detail",
    components: {
      GoodsList,
      DetailNavBar,
      DetailSwiper,
      DetailGoods,
      DetailShop,
      DetailInfo,
      DetailParams,
      DetailComment,
      Scroll,
      BackTop,
      DetailTabBar
    },
    data() {
      return {
        iid: '',
        titles: ['商品','参数','评论','推荐'],
        currentIndex: 0,
        topImages: null,
        goods: {},
        shop: {},
        detailDesc: '',
        detailInfo: {},
        imgLoadListener: null,
        detailParams: {},
        detailComment: {},
        recommend: [],
        isTop: true,
        topDistance: [],
        getTopDistance: null,
        isBlur: false
      }
    },
    methods: {
      navBarClick(index) {
        this.currentIndex = index
        this.$refs.scroll.scrollTo(0, this.topDistance[index])
      },
      backTop() {
        this.$refs.scroll.scrollTo(0, 0, 300)
      },
      contentScroll(position) {
        let y = -position.y
        this.isTop = !(y >= 1000)
        if(this.topDistance.length > 0) {
          for(let i = 0; i < 4; i++) {
            if(y >= -this.topDistance[i] && y < -this.topDistance[i+1]) {
              this.currentIndex = i
              break
            }
          }
        }
        // console.log(y)
      },
      imageLoad() {
        this.getTopDistance()
      },
      addCart() {
        this.isBlur = true
      },
      cartClose() {
        this.isBlur = false
      }
    },
    created() {
      this.iid = this.$route.params.iid

      getDetail(this.iid).then(res => {
        const data = res.result
        // console.log(data)

        // 1.获取轮播图图片
        this.topImages = data.itemInfo.topImages

        // 2.获取商品信息
        this.goods = new goods(data.itemInfo, data.columns, data.shopInfo.services)

        // 3.获取商家信息
        this.shop = new shop(data.shopInfo, data.shopInfo.score)

        // 4.获取商品详细和图片
        this.detailDesc = data.detailInfo.desc
        this.detailInfo = data.detailInfo.detailImage[0]

        // 5.获取商品具体参数
        this.detailParams = new detailParams(data.itemParams.rule.tables[0], data.itemParams.info.set)

        // 6.获取评论信息
        if(data.rate.list) {
          this.detailComment = data.rate.list[0]
        }
      })

      // 7.获取推荐信息
      getRecommend().then(res => {
        this.recommend = res.data.list
      })

      this.topDistance[0] = 0
      this.topDistance[4] = -Number.MAX_VALUE
      this.getTopDistance = debounce(() => {
        this.topDistance[1] = -this.$refs.params.$el.offsetTop
        if(this.$refs.comment) {
          this.topDistance[2] = -this.$refs.comment.$el.offsetTop
        }else{
          this.topDistance[2] = -this.$refs.recommend.$el.offsetTop
        }
        this.topDistance[3] = -this.$refs.recommend.$el.offsetTop
      }, 300)

    },
    mounted() {
      this.imgLoadListener = debounce(this.$refs.scroll.refresh, 300)
      this.$bus.$on('imageLoad', this.imgLoadListener)
    },
    destroyed() {
      this.$bus.$off('imageLoad', this.imgLoadListener)
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    height: 100vh;
  }
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .back-top {
    display: none;
  }
  .detail-tab-bar {
    position: fixed;
    height: 49px;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .blur {
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.42);
  }
</style>