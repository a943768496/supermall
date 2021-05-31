<template>
  <div class="detail-goods">
    <div class="title">{{goods.title}}</div>

    <div class="price">
      <span class="new-price" v-if="goods.lowNowPrice !== goods.highNowPrice">￥{{goods.lowNowPrice}}~￥{{goods.highNowPrice}}</span>
      <span class="new-price" v-else>￥{{goods.highNowPrice}}</span>
      <span class="old-price">￥{{goods.lowPrice}}</span>
      <span class="discount" v-if="goods.discountDesc">{{goods.discountDesc}}</span>
    </div>

    <div class="columns">
      <span v-for="item in goods.columns">{{item}}</span>
    </div>

    <div class="services">
      <div v-for="item in goods.services">
        <img :src="item.icon" alt="" @load="imageLoad">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "DetailGoods",
    props: {
      goods: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        serLength: 0,
        columns2: ''
      }
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
      }
    },
    mounted() {
      this.serLength = this.goods.services.length
      this.columns2 = this.goods.services[this.serLength-1].name

      $('.columns').children().eq(2).text(this.columns2)
      $('.services').children().eq(this.serLength-1).remove()
    }
  }
</script>

<style scoped>
  * {
    font-family: "Microsoft YaHei UI"
  }
  .detail-goods {
    border-bottom: 5px solid var(--color-space);
  }
  .title {
    margin: 15px 5px;
    font-size: 15px;
  }
  .price {
    position: relative;
  }
  .new-price {
    margin: 5px 0;
    display: inline-block;
    font-size: 22px;
    color: var(--color-high-text);
    line-height: 20px;
  }
  .old-price {
    color: var(--color-text);
    font-size: 13px;
    margin: 5px;
    text-decoration: line-through #848484FF;
  }
  .discount {
    display: inline-block;
    padding: 2px 5px;
    border-radius: 25px;
    margin-left: 3px;
    transform: translate(0, -30%);
    background-color: var(--color-high-text);
    color: white;
    font-size: 12px;
  }
  .columns {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin: 8px 0;
    border-bottom: 1px solid rgba(193, 193, 193, 0.34);
  }
  .columns span {
    color: var(--color-text);
    font-size: 13px;
  }
  .services {
    display: flex;
    justify-content: space-between;
    padding: 0 3px;
    margin: 8px 2px;
  }
  .services div img {
    width: 12px;
  }
  .services div span {
    display: inline-block;
    font-size: 13px;
    line-height: 35px;
  }
</style>