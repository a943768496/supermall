<template>
  <div>
    <swiper :banner="topImages" class="swiper" :current-func="currentFunc">
      <div v-for="(item, index) in topImages" v-show="currentIndex === index">
        <img :src="item" alt="" @load="imageLoad">
      </div>
    </swiper>
  </div>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  import {mapGetters} from 'vuex'

  export default {
    name: "DetailSwiper",
    components: {
      Swiper
    },
    props: {
      topImages: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentFunc: 'changeDetailCurrentIndex',
        isImage: false
      }
    },
    computed: {
      ...mapGetters({
        currentIndex: 'detailCurrentIndex'
      })
    },
    methods: {
      imageLoad() {
        if(!this.isImage) {
          this.$bus.$emit('imageLoad')
          this.isImage = true
        }

      }
    },
    activated() {
      this.$store.commit(this.currentFunc, 0)
    }
  }
</script>

<style scoped>
  .swiper {
    height: 300px;
    overflow: hidden;
  }
  .swiper div img {
    width: 100vw;
  }
</style>