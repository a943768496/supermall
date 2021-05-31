<template>
  <div class="category">
    <category-nav-bar class="category-nav-bar"/>
    <category-column :column="column" class="content" @toBeActive="toActive">
      <category-detail :detail="detail" class="category-detail"/>
    </category-column>
  </div>
</template>

<script>
  import CategoryNavBar from './childComps/CategoryNavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import CategoryColumn from './childComps/CategoryColumn'
  import CategoryDetail from './childComps/CategoryDetail'

  import {getCategory, getCategoryDetail} from 'network/category'

  export default {
    name: "Category",
    components: {
      CategoryDetail,
      CategoryNavBar,
      Scroll,
      CategoryColumn,
    },
    data() {
      return {
        column: [],
        detail: [],
        maitKey: '3627'
      }
    },
    methods: {
      toActive(maitKey) {
        this.maitKey = maitKey
        this.getCategoryDetail(this.maitKey)
      },
      getCategoryDetail(maitKey) {
        getCategoryDetail(this.maitKey).then(res => {
          this.detail = res.data.list
        })
      }
    },
    created() {
      getCategory().then(res => {
        this.column = res.data.category.list
      })
      this.getCategoryDetail(this.maitKey)
    }
  }
</script>

<style scoped>
  .category {
    position: relative;
    width: 100vw;
    height: 100vh;
  }
  .category-nav-bar {
    position: relative;
    z-index: 2;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    width: 100vw;
    overflow: hidden;
  }
  .category-detail {
    height: calc(100vh - 44px - 49px);
  }
</style>