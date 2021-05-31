<template>
  <div class="detail-choice">
    <div class="top">
      <div class="price">￥{{price}}</div>
      <div class="close" @click="close"></div>
    </div>

    <div class="center">
      <div class="color">
        <div>颜色</div>
        <div class="choice-buttoms">
          <div v-for="(item, index) in choice.color">
            <input type="radio" :id="'color'+index" name="color" :value="item.name">
            <label :for="'color'+index" @click="color(index)">{{item.name}}</label>
          </div>
        </div>
      </div>

      <div class="size">
        <div>尺码</div>
        <div class="choice-buttoms">
          <div v-for="(item, index) in choice.size">
            <input type="radio" :id="'size'+index" name="size" :value="item.name">
            <label :for="'size'+index" @click="size(index)">{{item.name}}</label>
          </div>
        </div>
      </div>

      <div class="count">
        <div>购买数量</div>
        <div class="choice-buttoms">
          <div class="count-bottom" @click="sub">-</div>
          <div>{{count}}</div>
          <div class="count-bottom" @click="add">+</div>
        </div>
      </div>
    </div>



    <div class="bottom">
      <div class="submit" @click="addCart">确定</div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'

  export default {
    name: "DetailChoice",
    props: {
      choice: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        count: 1,
        minAdd: 0,
        addPrice: 0
      }
    },
    computed: {
      price() {
        let price = ((this.addPrice + this.choice.low * 1) * this.count)*1
        price = price.toFixed(2)
        return price
      }
    },
    methods: {
      close() {
        this.$emit('close')
      },
      color(index) {
      },
      size(index) {
        this.addPrice = this.minAdd * index
      },
      add() {
        this.count ++
      },
      sub() {
        if(this.count <= 1) {
          return
        }
        this.count --
      },
      addCart() {
        const product = {}
        product.iid = this.choice.iid
        product.picture = this.choice.picture
        product.title = this.choice.title
        product.price = this.price
        product.count = this.count
        product.color = $('.color input[type=radio]:checked').val()
        product.size = $('.size input[type=radio]:checked').val()
        product.isChecked = false

        this.$store.dispatch('addToCart', product).then(res => {
          this.$emit('addToCart', res)
        })

        this.close()
      }
    },
    created() {
      if(this.choice.size.length === 1) {
        this.minAdd = 0
        console.log('sss')
      }else{
        this.minAdd = ((this.choice.high - this.choice.low)/(this.choice.size.length-1)).toFixed(2)
      }
    },
    mounted() {
      $('.color input[type=radio]:first').attr('checked', 'checked')
      $('.size input[type=radio]:first').attr('checked', 'checked')
    }
  }
</script>

<style scoped>
  .detail-choice {
    width: 100vw;
    height: 549px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  .close {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(199, 199, 199, 0.63);
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .close::after, .close::before {
    content: '';
    width: 18px;
    height: 3px;
    border-radius: 1px;
    background-color: #efefef;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .close::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  .top {
    width: 100vw;
    height: 10%;
  }

  .price {
    margin: 10px;
    font-size: 24px;
    color: #ff8198;
  }

  .center {
    width: 100vw;
    height: 75%;
    margin-left: 15px ;
  }
  .color {
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  .size {
    margin: 20px 0;
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  .choice-buttoms {
    display: flex;
    margin-top: 15px;
    flex-wrap: wrap;
  }
  input {
    display: none;
  }
  .choice-buttoms div label {
    display: inline-block;
    height: 20px;
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #eee;
    margin: 5px 15px 5px 0;
  }

  .bottom {
    width: 100vw;
    height: 15%;
    display: flex;
    justify-content: center;
  }
  .submit {
    width: 150px;
    height: 35px;
    border-radius: 30px;
    background-color: #ff8198;
    position: absolute;
    bottom: 15px;
    text-align: center;
    line-height: 35px;
    color: white;
  }

  input[type = radio]:checked+label {
    color: white;
    background-color: #ff8198;
  }
  .count {
    padding-top: 15px;
    border-top: 1px solid #eee;
  }
  .count-bottom {
    width: 30px;
    height: 30px;
    font-size: 25px;
    /*color: #5f5f5f;*/
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
    background-color: #eee;
  }
  .count div div:nth-child(2) {
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    background-color: rgba(238, 238, 238, 0.6);
  }


</style>