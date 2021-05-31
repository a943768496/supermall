<template>
  <div>
    <div class="first">
      <div class="item">
        <img src="~assets/img/profile/message.svg">
        <span class="cn">我的消息</span>
      </div>
      <div class="item">
        <img src="~assets/img/profile/pointer.svg">
        <span class="cn">积分商城</span>
      </div>
      <div class="item">
        <img src="~assets/img/profile/vip.svg">
        <span class="cn">会员卡</span>
      </div>
    </div>

    <div class="second">
      <div class="item" @click="toCart">
        <img src="~assets/img/profile/cart.svg">
        <span class="cn">我的购物车</span>
      </div>
      <div class="item">
        <img src="~assets/img/profile/shopping.svg">
        <span class="cn">下载购物App</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileOther",
    methods: {
      toCart() {
        this.$router.replace('/cart')
      }
    }
  }
</script>

<style scoped>
  .item {
    width: 100vw;
    height: 45px;
    display: flex;
    align-items: center;
    padding: unset;
  }
  .item img {
    width: 20px;
    margin: 0 12px 0 15px;
  }
  .item span {
    display: block;
    height: 45px;
    line-height: 45px;
    border-top: 1px solid var(--color-space);
    font-size: 15px;
  }
  .first {
    border-bottom: 15px solid var(--color-space);
  }
</style>