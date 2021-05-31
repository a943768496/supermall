<template>
  <div class="tab-control">
    <div
        v-for="(item, index) in titles"
        @click="changeTitle(index)"
        :class="{active: currentIndex === index}"
        class="title">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    },
    currentIndex: Number
  },
  data() {
    return {
    }
  },
  methods: {
    changeTitle(index) {
      this.$emit('titleClick', index)
    }
  }
}
</script>

<style scoped>
  .tab-control {
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
    color: var(--color-text);
    font-family: "Microsoft YaHei UI";
  }
  .title{
    padding: 0 5px;
  }
  .active {
    color: var(--color-high-text);
    border-bottom: 3px solid var(--color-high-text);
  }
</style>