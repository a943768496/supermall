<template>
  <div>
    <cart-nav-bar/>

    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>

    <cart-bottom class="cart-bottom"/>
  </div>
</template>

<script>
  import CartNavBar from './childComps/CartNavBar'
  import CartBottom from './childComps/CartBottom'
  import CartList from './childComps/CartList'
  import Scroll from 'components/common/scroll/Scroll'
  import {debounce} from 'common/utils'

  export default {
    name: "Cart",
    components: {
      Scroll,
      CartList,
      CartBottom,
      CartNavBar
    },
    data() {
      return {
        imageLoadListener: null
      }
    },
    mounted() {
      this.imageLoadListener = debounce(this.$refs.scroll.refresh, 300)
      this.$bus.$on('imageLoad', this.imageLoadListener)
    },
    activated() {
      this.$refs.scroll.refresh()
      this.$bus.$on('imageLoad', this.imageLoadListener)
    },
    deactivated() {
      this.$bus.$off('imageLoad', this.imageLoadListener)
    }
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 44px;
    bottom: 89px;
    right: 0;
    left: 0;
    width: 100vw;
    height: calc(100% - 44px - 89px);
    overflow: hidden;
  }
</style>