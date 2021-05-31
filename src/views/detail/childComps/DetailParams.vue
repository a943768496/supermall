<template>
  <div class="detail-params">
    <div>
      <table class="rules">
        <tr v-for="item in detailParams.rules">
          <td v-for="itemm in item">{{itemm}}</td>
        </tr>
      </table>
    </div>
    <div>
      <table class="info">
        <tr v-for="item in detailParams.info">
          <td>{{item.key}}</td>
          <td colspan="3">{{item.value}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParams",
    props: {
      detailParams: {
        type: Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detail-params {
    padding-bottom: 25px;
    border-bottom: 5px solid var(--color-space);
  }
  .detail-params div {
    display: flex;
    justify-content: center;
  }
  table {
    width: 90%;
    line-height: 42px;
    border-collapse: collapse;
    color: #383838;
  }
  tr {
    height: 45px;
    border-bottom: 1px solid rgba(154, 154, 154, 0.42);
  }
  .rules {
    margin: 25px 10px 0 10px;
    border-bottom: 2px solid rgba(154, 154, 154, 0.42);
  }
  .rules tr td:first-child {
    width: 100px;
  }
  .info tr td:first-child {
    width: 100px;
  }
  .info tr td:last-child {
    color: var(--color-high-text);
    position: relative;
  }
</style>