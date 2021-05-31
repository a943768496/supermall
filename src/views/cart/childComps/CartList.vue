<template>
  <div class="cart-list">
    <div v-for="item in cart" class="list">
      <div class="left">
        <div class="button" :class="{checked: item.isChecked}" @click="toChecked(item)">
          <img src="~assets/img/cart/tick.svg" @load="imageLoad">
        </div>
      </div>
      <div class="picture"><img :src="item.picture"></div>
      <div class="text">
        <div class="title">{{item.title}}</div>
        <div class="style">
          <span>{{item.color}}</span>
          <span>{{item.size}}</span>
        </div>
        <div class="other">
          <span class="price">￥{{item.price}}</span>
          <span class="count">×{{item.count}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    computed: {
      ...mapGetters(['cart'])
    },
    methods: {
      toChecked(item) {
        item.isChecked = !item.isChecked
      },
      imageLoad() {
        this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .cart-list {
    width: 100vw;
  }
  .list {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid #cdcdcd;
  }
  .left {
    display: flex;
    align-items: center;
  }
  .button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #909090;
    margin-left: 2px;
  }
  .picture {
    height: 100px;
    overflow: hidden;
    border-radius: 5px;
  }
  .picture img {
    width: 80px;
  }
  .text {
    width: 70%;
  }
  .title, .style, .other {
    margin: 0 0 10px 0;
  }
  .title {
    height: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .style {
    font-size: 14px;
    color: #5f5f5f;
  }
  .style span {
    margin: 0 5px;
  }
  .other {
    display: flex;
    justify-content: space-between;
  }
  .price {
    color: var(--color-high-text);
  }
  .count {
    margin-right: 10px;
  }
  .checked {
    background-color: var(--color-tint);
    border: 1px solid var(--color-high-text);
  }
</style>