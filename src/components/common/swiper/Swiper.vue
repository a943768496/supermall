<template>
  <div class="swiper">
    <swiper-item class="swiper-item">
      <slot></slot>
    </swiper-item>

    <div class="spot">
      <div
          v-for="(item, index) in banner" class="spot-item"
          :class="{spotActive: currentIndex === index}"
          @click="spotClick(index)"></div>
    </div>
  </div>
</template>

<script>
  import SwiperItem from './SwiperItem'

  export default {
    name: "Swiper",
    components: {SwiperItem},
    props: {
      banner: {
        type: Array,
        default() {
          return []
        }
      },
      currentFunc: String
    },
    data() {
      return {
        currentIndex: 0,
        time: 0
      }
    },
    watch: {
      currentIndex() {
        this.$store.commit(this.currentFunc, this.currentIndex)
      }
    },
    computed: {
      length() {
        return this.banner.length
      }
    },
    methods: {
      spotClick(index) {
        this.currentIndex = index
        this.time = 0
      },
      goNext() {
        if(this.currentIndex === this.length - 1) {
          this.currentIndex = 0
        }else{
          this.currentIndex ++
        }
        this.time = 0
      }
    },
    mounted() {
      setInterval(() => {
        this.time++
        if(this.time === 20) {
          this.goNext()
        }
      },100)
    }
  }
</script>

<style scoped>
  .swiper {
    position: relative;
    width: 100vw;
  }
  /*img {*/
  /*  width: 100vw;*/
  /*  display: none;*/
  /*}*/
  .spot {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
    font-size: 20px;
    color: red;
    display: flex;
    justify-content: center;
    z-index: 3;
  }
  .spot-item {
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.3);
  }
  /*.active {*/
  /*  display: inline;*/
  /*}*/
  .spotActive {
    border: 2px solid white;
    background: rgba(255, 255, 255, 0.3);
  }
</style>