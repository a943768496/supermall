<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "CategoryNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    width: 100vw;
    background-color: var(--color-tint);
    color: white;
  }
</style>