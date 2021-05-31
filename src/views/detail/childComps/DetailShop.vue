<template>
  <div class="detail-shop">
    <div class="title">
      <img :src="shop.shopLogo">
      <span>{{shop.name}}</span>
    </div>

    <div class="other">
      <div class="other-sum">
        <div class="sum">
          <div>{{((shop.sumSell)/10000).toFixed(1)}}万</div>
          <div>总销量</div>
        </div>

        <div class="sum">
          <div>{{shop.sumGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>

      <div class="border"></div>

      <div class="comment">
        <div v-for="item in shop.score">
          <span>{{item.name}}</span>
          <span :class="{'high-text': item.isBetter}">{{item.score}}</span>
          <span class="high" v-if="item.isBetter">高</span>
          <span class="low" v-else>低</span>
        </div>
      </div>
    </div>

    <div class="button"><span>进店逛逛</span></div>

  </div>
</template>

<script>
  export default {
    name: "DetailShop",
    props: {
      shop: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  * {
    font-family: "Microsoft YaHei UI";
  }
  .detail-shop {
    position: relative;
    padding-bottom: 30px;
    border-bottom: 5px solid var(--color-space);
  }
  .title {
    width: 100vw;
    height: 94px;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  .title img {
    width: 45px;
    border-radius: 50%;
    border: 1px solid var(--color-text);
    margin-right: 10px;
  }
  .title span {
    font-family: "Microsoft YaHei UI";
    color: #787878;
  }
  .other {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    position: relative;
  }
  .other-sum {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
  }
  .sum {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sum div:nth-child(1) {
    font-size: 18px;
    padding-bottom: 10px;
  }
  .sum div:nth-child(2) {
    font-size: 12px;
  }
  .border {
    width: 10px;
    height: 44px;
    border-right: 1px solid rgba(220, 220, 220, 0.87);
    width: 1%;
  }
  .comment {
    padding: 0 10px;
    width: 46%;
    color: #3cbf3c;
  }
  .comment div {
    margin: 10px 0;
    display: flex;
    align-items: center;
  }
  .comment div span:nth-child(1) {
    font-size: 13px;
    color: black;
    margin-left: 15px;
  }
  .comment div span:nth-child(2) {
    font-size: 14px;
    margin-left: 15px;
  }
  .high-text {
    color: #f13535;
  }
  .high {
    position: absolute;
    right: 7%;
    display: inline-block;
    width: 13px;
    height: 16px;
    background-color: #f13535;
    color: white;
    font-size: 13px;
  }
  .low {
    position: absolute;
    right: 7%;
    display: inline-block;
    width: 13px;
    height: 16px;
    background-color: #3cbf3c;
    color: white;
    font-size: 13px;
  }
  .button {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 10px;
  }
  .button span {
    width: 150px;
    height: 35px;
    background-color: #e7e9f1;
    line-height: 35px;
    border-radius: 10px;
    color: #6c6a6a;
    font-size: 16px;
  }
</style>