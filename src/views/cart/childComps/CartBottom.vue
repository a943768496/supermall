<template>
  <div class="cart-bottom">
    <div class="choose-all">
      <img src="~assets/img/cart/tick.svg"
           @click="allChecked">
      <span>全选</span>
    </div>
    <div class="sum">合计￥{{sumPrice}}</div>
    <div class="delete" @click="deleteGoods">移除</div>
    <div class="calculate">去计算
      <span v-if="this.toCalculate !== 0">({{toCalculate}})</span>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "CartBottom",
    computed: {
      sumPrice() {
        let price = 0
        for(let item of this.$store.state.cart) {
          if(item.isChecked === true) {
            price = price * 1 + item.price * 1
          }
        }
        price = (price * 1).toFixed(2)
        return price
      },
      toCalculate() {
        let count = 0
        for(let item of this.$store.state.cart) {
          if(item.isChecked === true) {
            count ++
          }
        }
        return count
      },
      sumCart() {
        return this.$store.state.cart.length
      }
    },
    methods: {
      allChecked() {
        if(this.$store.state.cart.find(item => item.isChecked === false)) {
          this.$store.commit('toCheckedAll')
        }else{
          this.$store.commit('notCheckedAll')
        }
        this.changeButton()
      },
      deleteGoods() {
        this.$store.commit('deleteChecked')
      },
      changeButton() {
        if(this.sumCart === this.toCalculate && this.sumCart !== 0 && this.toCalculate !== 0) {
          $('.choose-all img').css({'background-color': 'var(--color-tint)', 'border': '2px solid var(--color-high-text)'})
        }else{
          $('.choose-all img').css({'background-color': '#dee1ea', 'border': '2px solid #cbcbcb'})
        }
      }
    },
    watch: {
      toCalculate:function () {
        this.changeButton()
      }
    }
  }
</script>

<style scoped>
  .cart-bottom {
    width: 100vw;
    height: 40px;
    position: fixed;
    bottom: 49px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #dee1ea;
    font-size: 15px;
  }
  .choose-all {
    width: 30%;
    display: flex;
    align-items: center;
    color: #656565;
  }
  .choose-all img {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    margin: 0 6px 0 10px;
    border: 2px solid #cbcbcb;
  }
  .sum {
    position: fixed;
    left: 25%;
    color: var(--color-high-text);
  }
  .delete {
    position: fixed;
    right: 28%;
    height: 40px;
    width: 60px;
    background-color: #ffba97;
    text-align: center;
    line-height: 40px;
  }
  .calculate {
    height: 40px;
    width: 28%;
    background-color: var(--color-tint);
    text-align: center;
    line-height: 40px;
    color: white;
  }
</style>