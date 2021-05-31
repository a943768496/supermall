<template>
  <div class="goods-list">
    <div class="goods-list-item" @click="toDetail">
      <img :src="showImage" @load="imgLoad" class="image">
      <div class="title">{{goodsItem.title}}</div>
      <div class="detail">
        <div class="price">{{goodsItem.price}}</div>
        <img src="~assets/img/common/collect.svg" class="star">
        <div class="collection">{{goodsItem.cfav}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    computed: {
      showImage() {
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imageLoad')
      },
      toDetail() {
        if(!this.$route.path.includes('/detail/' + this.goodsItem.iid)) {
          this.$router.push('/detail/' + this.goodsItem.iid)
        }
      }
    }
  }
</script>

<style scoped>
  .goods-list {
    position: relative;
    width: 47%;
    padding-top: 10px;
  }
  .image{
    width: 100%;
    border-radius: 5px;
  }
  .title {
    height: 24px;
    width: 100%;
    font-size: 12px;
    font-family: "Microsoft YaHei UI";
    color: var(--color-text);
    line-height: 24px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .detail {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .price {
    color: var(--color-high-text);
    margin-right: 8px;
  }
  .collection {
    color: var(--color-text);
    position: relative;
  }
  .star {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
</style>