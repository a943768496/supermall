<template>
  <div class="goodsList">
    <goods-list-item
        v-for="item in goods"
        :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    components: {
      GoodsListItem
    }
  }
</script>

<style scoped>
  .goodsList {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>