<template>
  <div class="tabbar">
    <tab-bar-item path="/home">
      <img slot="normal" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="normal" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="normal" src="~assets/img/tabbar/cart.svg" alt="">
      <img slot="active" src="~assets/img/tabbar/cart_active.svg" alt="">
      <div slot="text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="profile">
      <img slot="normal" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="text">我的</div>
    </tab-bar-item>
  </div>
</template>

<script>
  import TabBarItem from './TabBarItem'

  export default {
    name: "TabBar",
    components: {
      TabBarItem
    }
  }


</script>

<style scoped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;

    right: 0;
    left: 0;
    bottom: 0;
    background: #f2f2f2;
    box-shadow: 0 -1px 1px rgba(100,100,100,.2);

    display: flex;
    /*justify-content: space-around;*/
    /*align-items: center;*/
  }

</style>