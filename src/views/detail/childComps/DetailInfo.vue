<template>
  <div class="detail-info">
    <div class="desc">
      <span>{{detailDesc}}</span>
    </div>
    <div class="looks">穿着效果</div>
    <div class="images">
      <img v-for="item in detailInfo.list" :src="item" alt="" @load="imageLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {}
        }
      },
      detailDesc: String
    },
    methods: {
      imageLoad() {
        this.$bus.$emit('imageLoad')
        this.$emit('imageLoad')
      }
    }
  }
</script>

<style scoped>
  .detail-info {
    padding-bottom: 20px;
    border-bottom: 5px solid var(--color-space);
  }
  .desc {
    width: 100vw;
    minheight: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .desc span {
    display: inline-block;
    width: 92%;
    font-size: 14px;
    color: #505050;
    padding: 40px 0;
  }
  .desc::after {
    content: '';
    position: absolute;
    top: 16%;
    left: 4%;
    width: 6px;
    height: 6px;
    background-color: black;
  }
  .desc span::after {
    content: '';
    position: absolute;
    top: 16%;
    left: 4%;
    transform: translate(0, 5px);
    width: 100px;
    height: 1px;
    background-color: #9e9e9e;
  }
  .desc::before {
    content: '';
    position: absolute;
    bottom: 16%;
    right: 4%;
    width: 6px;
    height: 6px;
    background-color: black;
  }
  .desc span::before {
    content: '';
    position: absolute;
    bottom: 16%;
    right: 4%;
    transform: translate(0, 1px);
    width: 100px;
    height: 1px;
    background-color: #9e9e9e;
  }
  .looks {
    padding: 10px;
  }
  .images img {
    width: 100vw;
  }
</style>