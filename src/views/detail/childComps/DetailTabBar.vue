<template>
  <div class="detail-tab-bar">
    <div class="left">
      <div class="service">
        <div class="img"></div>
        <div>客服</div>
      </div>
      <div class="shop">
        <div class="img"></div>
        <div>店铺</div>
      </div>
      <div class="collection">
        <div class="img"></div>
        <div>收藏</div>
      </div>
    </div>

    <div class="right">
      <div class="cart" @click="addCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>

    <detail-choice class="detail-choice"
                   :choice="choice"
                   :class="{slide: isShow}"
                   @close="cartClose"
                   v-if="choice.color"
                   @addToCart="addToCart"/>
  </div>
</template>

<script>
  import DetailChoice from './DetailChoice'
  import Toast from 'components/content/toast/Toast'
  import {getDetail, choice} from 'network/detail'

  export default {
    name: "DetailTabBar",
    components: {
      DetailChoice,
      Toast
    },
    props: {
      iid: String
    },
    data() {
      return {
        isShow: false,
        choice: {},
        toastText: ''
      }
    },
    methods: {
      addCart() {
        this.isShow = true
        this.$emit('addCart')
      },
      cartClose() {
        this.isShow = false
        this.$emit('cartClose')
      },
      addToCart(res) {
        this.toastText = res
        this.$toast.show(this.toastText)
      }
    },
    created() {
      getDetail(this.iid).then(res => {
        const data = res.result
        // console.log(data)

        this.choice = new choice(data.skuInfo.props[0], data.skuInfo.props[1], data.itemInfo, data)
        this.choice.iid = this.iid
      })
    }
  }
</script>

<style scoped>
  .detail-tab-bar {
    width: 100vw;
    height: 100vh;
    background-color: white;
    z-index: 5;
    display: flex;
    justify-content: center;
  }
  .left {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 12px;
    color: #797979;
  }
  .left div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .img {
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
    width: 22px;
    height: 22px;
  }
  .collection .img {
    width: 25px;
    height: 22px;
  }
  .service .img {
    background-position: 0 -53px;
  }
  .shop .img {
    background-position: 0 -98px;
  }
  .right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 49px;
    font-size: 15px;
  }
  .cart, .buy {
    width: 50%;
    height: 100%;
  }
  .cart {
    background-color: #fad159;
  }
  .buy {
    background-color: #fc9abc;
    color: white;
  }

  .detail-choice {
    position: absolute;
    top: 49px;
    z-index: 2;
  }
  .slide {
    top: -500px;
    transition: 0.2s;
  }
  .toast {
    position: absolute;
  }
</style>