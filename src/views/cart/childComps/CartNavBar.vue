<template>
  <div class="cart-nav-bar">
    <nav-bar>
      <span slot="center">购物车</span>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "CartNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .cart-nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>