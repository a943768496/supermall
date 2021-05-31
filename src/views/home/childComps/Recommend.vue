<template>
  <div class="recommend">
    <div v-for="item in recommend" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" @load="imgLoad">
      </a>
      <div class="text">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Commend",
    props: {
      recommend: {
        type: Array,
        default() {
          return []
        }
      }
    },
    methods: {
      imgLoad() {
        this.$bus.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    position: relative;
    text-align: center;
    border-bottom: 6px solid var(--color-space);
  }
  .recommend-item img {
    flex: 1;
    width: 85%;
    margin-top: 10px;
  }
  .text {
    font-size: 13px;
    letter-spacing: 1px;
    color: var(--color-text);
    margin-top: 5px;
    margin-bottom: 14px;
  }
</style>