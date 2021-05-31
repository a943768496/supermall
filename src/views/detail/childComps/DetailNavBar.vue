<template>
  <div class="nav-bar">
    <nav-bar>
      <img slot="left" src="~assets/img/common/back.svg" alt="" @click="leftClick">
      <div slot="center" class="center">
        <div v-for="(item, index) in titles"
             :class="{active: currentIndex === index}"
             @click="navBarClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabcontrol/TabControl'

  export default {
    name: "DetailNavBar",
    components: {
      NavBar,
      TabControl
    },
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      },
      currentIndex: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
      }
    },
    methods: {
      navBarClick(index) {
        this.$emit('navBarClick', index)
      },
      leftClick() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>
  .nav-bar {
    background-color: white;
    position: relative;
    color: var(--color-text);
  }
  .nav-bar img {
    border: 0;
    position: absolute;
    left: 8%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .center {
    display: flex;
    justify-content: center;
    align-items: center;
    /*background-color: red;*/
  }
  .center div {
    margin: 18px;
    font-size: 14px;
    font-family: "Microsoft YaHei UI";
  }
  .active {
    color: var(--color-high-text);
  }


</style>