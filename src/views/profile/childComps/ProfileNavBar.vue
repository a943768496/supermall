<template>
  <nav-bar class="profile-nav-bar">
    <div slot="center">我的档案</div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'

  export default {
    name: "ProfileNavBar",
    components: {NavBar}
  }
</script>

<style scoped>
  .profile-nav-bar {
    background-color: var(--color-tint);
    color: white;
  }
</style>