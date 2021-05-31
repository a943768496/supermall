<template>
  <div class="toast" v-if="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message) {
        this.message = message
        this.isShow = true

        setTimeout(() => {
          $('.toast').fadeOut(1000, () => {this.isShow = false})
        },1000)
      }
    }
  }
</script>

<style scoped>
  .toast {
    height: 35px;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3;
    transform: translate(-50%, -50%);
    background-color: rgba(76, 76, 76, 0.6);
    text-align: center;
    line-height: 35px;
    font-size: 18px;
    padding: 0 10px;
    color: white;
  }
</style>