<template>
  <div>
    <profile-nav-bar/>
    <profile-data/>
    <profile-other/>
  </div>
</template>

<script>
  import ProfileNavBar from './childComps/ProfileNavBar'
  import ProfileData from './childComps/ProfileData'
  import ProfileOther from './childComps/ProfileOther'
  export default {
    name: "Profile",
    components: {ProfileOther, ProfileData, ProfileNavBar}
  }
</script>

<style scoped>

</style>