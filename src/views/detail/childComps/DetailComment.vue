<template>
  <div class="detail-comment">
    <div class="first">
      <span>用户评价</span>
      <div>
        <span>更多</span>
        <img src="~assets/img/common/back.svg">
      </div>
    </div>

    <div class="second">
      <div class="user">
        <img :src="detailComment.user.avatar" alt="">
        <span>{{detailComment.user.uname}}</span>
      </div>
      <div class="content">{{detailComment.content}}</div>
    </div>

    <div class="third">
      <div class="date">{{detailComment.created | showDate}}</div>
      <div class="style">{{detailComment.style}}</div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'

  export default {
    name: "DetailComment",
    props: {
      detailComment: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    filters: {
      showDate(value) {
        const date = new Date(value * 1000)
        return formatDate(date, 'YYYY-MM-DD hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .detail-comment {
    padding: 18px 10px 25px 10px;
    border-bottom: 5px solid var(--color-space);
  }
  .first {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 15px;
    border-bottom: 2px solid #eee;
  }
  .first div {
    display: flex;
    align-items: center;
  }
  .first div {
    font-size: 15px;
    line-height: 15px;
    margin-right: 5px;
  }
  .first div img {
    width: 15px;
    transform: rotate(180deg);
    margin-left: 8px;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 10px 0;
  }
  .user img {
    width: 45px;
    border-radius: 50%;
  }
  .user span {
    margin-left: 8px;
    font-size: 15px;
  }
  .content, .third {
    padding: 0 5px;
  }
  .content {
    font-size: 14px;
    color: #5a5a5a;
    padding-bottom: 10px;
  }
  .third {
    display: flex;
    align-items: center;
    font-size: 12px;
    color: #9c9c9c;
  }
  .style {
    margin-left: 10px;
    font-size: 10px;
  }
</style>