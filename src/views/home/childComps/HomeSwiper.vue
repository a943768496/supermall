<template>
  <div>
    <swiper :banner="banner" class="swiper" :current-func="currentFunc">
      <div v-for="(item, index) in banner" v-show="currentIndex === index">
        <img
            :src="item.image"
            alt=""
            @load="imageLoad">
      </div>
    </swiper>

  </div>
</template>

<script>
  import Swiper from 'components/common/swiper/Swiper'
  import {mapGetters} from 'vuex'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper
    },
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        currentFunc: 'changeHomeCurrentIndex',
        isImage: false
      }
    },
    computed: {
      ...mapGetters({
        currentIndex: 'homeCurrentIndex'
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
    },
    deactivated() {
    }
  }
</script>

<style scoped>
  .swiper img {
    width: 100vw;
  }
</style>