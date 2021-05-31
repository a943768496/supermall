<template>
  <div>
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "HomeNavBar",
    components: {
      NavBar
    }
  }
</script>

<style scoped>
  .home-nav {
    background: var(--color-tint);
    color: white;
    letter-spacing: 1px;
    font-family: "Microsoft YaHei UI"
  }
</style>