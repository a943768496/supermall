<template>
  <div>
    <div class="nav-bar">
      <span class="left">
        <slot name="left"></slot>
      </span>
      <span class="center">
        <slot name="center"></slot>
      </span>
      <span class="right">
        <slot name="right"></slot>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .nav-bar {
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 1px 1px rgba(100,100,100,.2);
  }
</style>