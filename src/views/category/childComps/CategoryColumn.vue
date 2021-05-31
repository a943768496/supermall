<template>
  <div class="category-column">
    <scroll class="content" ref="scroll">
      <div class="column">
        <div v-for="(item, index) in column"
             class="item"
             :class="{active: index === currentIndex}"
             @click="toBeActive(item, index)">{{item.title}}</div>
      </div>
    </scroll>
    <div class="detail">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    name: "CategoryColumn",
    components: {
      Scroll
    },
    props: {
      column: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        isActive: false,
        currentIndex: 0
      }
    },
    methods: {
      toBeActive(item, index) {
        this.currentIndex = index
        this.$emit('toBeActive', item.maitKey)
      }
    },
    activated() {
      this.$refs.scroll.refresh()
    },
    mounted() {
      this.$refs.scroll.refresh()
    },
    updated() {
      this.$refs.scroll.refresh()
    }
  }
</script>

<style scoped>
  .category-column {
    display: flex;
    position: relative;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    /*height: 100%;*/
  }
  .column {
    width: 25vw;
    background-color: var(--color-space);
  }
  .item {
    text-align: center;
    padding: 14px 0;
  }
  .active {
    background-color: white;
    position: relative;
  }
  .active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: var(--color-high-text);
  }

  .detail {
    background-color: white;
    position: absolute;
    right: 0;
    width: 75vw;
  }
</style>