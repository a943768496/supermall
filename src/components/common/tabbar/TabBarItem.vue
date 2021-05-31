<template>
  <div @click="actived" class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="normal"></slot>
    </div>
    <div v-else>
      <slot name="active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      color: {
        type: String,
        default: '#FF5777'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.includes(this.path)
      },
      activeStyle() {
        return this.isActive ? {color: this.color} : {}
      }
    },
    methods: {
      actived() {
        if(!this.$route.path.includes(this.path)){ // 防止重复点击同一个路由产生的bug
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    font-size: 14px;
    /*display: flex;*/
    /*flex-direction: column;*/
    /*justify-content: center;*/
    text-align: center;
  }
  .tab-bar-item img {
    width: 22px;
    height: 22px;
    /*transform: translate(50%);*/
    margin-bottom: 3px;
    margin-top: 5px;
    vertical-align: middle;
  }
</style>