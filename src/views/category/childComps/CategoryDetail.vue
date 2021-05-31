<template>
  <div class="category-detail">
    <scroll class="content" ref="scroll">
      <div class="items">
        <div class="item" v-for="item in detail" >
          <a :href="item.link">
            <img :src="item.image" alt="" @load="imageLoad">
          </a>

          <div>{{item.title}}</div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
  import Scroll from '../../../components/common/scroll/Scroll'
  import {debounce} from '../../../common/utils'
  export default {
    name: "CategoryDetail",
    components: {Scroll},
    props: {
      detail: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        imageLoadListener: null
      }
    },
    methods: {
      imageLoad() {
        this.imageLoadListener()
      }
    },
    mounted() {
      this.imageLoadListener = debounce(this.$refs.scroll.refresh, 100)
    }
  }
</script>

<style scoped>
  .category-detail {
    position: relative;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    /*background-color: red;*/
  }
  .items {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .item {
    margin: 10px 0;
  }
  .item img {
    width: 26vw;
  }
  .item div {
    text-align: center;
    color: #505050;
  }
</style>