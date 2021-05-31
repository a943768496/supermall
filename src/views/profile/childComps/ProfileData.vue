<template>
  <div class="profile-data">
    <div class="first">
      <div class="first-first">
        <img src="~assets/img/profile/avatar.svg">
      </div>

      <div class="first-second">
        <div class="register">登录/注册</div>
        <div class="phone">
          <img src="~assets/img/profile/phone.svg">
          <span>暂无绑定手机号</span>
        </div>
      </div>

      <div class="first-third">
        <img src="~assets/img/common/arrow-left.svg">
      </div>
    </div>

    <div class="second">
      <div class="second-first">
        <div>
          <span class="number">0.00</span>
          <span class="cn">元</span>
        </div>
        <div class="cn">我的余额</div>
      </div>
      <div class="second-second">
        <div>
          <span class="number">0</span>
          <span class="cn">个</span>
        </div>
        <div class="cn">我的优惠</div>
      </div>
      <div class="second-third">
        <div>
          <span class="number">0</span>
          <span class="cn">分</span>
        </div>
        <div class="cn">我的积分</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProfileData"
  }
</script>

<style scoped>
  .profile-data {
    border-bottom: 15px solid var(--color-space);
  }
  .first {
    background-color: var(--color-tint);
    display: flex;
    color: white;
    padding: 10px 10px;
    position: relative;
  }
  .first-first {
    margin: 0 15px 0 0;
  }
  .first-first img {
    width: 60px;
  }
  .first-second {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .register {
    margin: 5px 5px;
    line-height: 20px;
  }
  .phone {
    display: flex;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
  }
  .first-second img {
    width: 20px;
  }
  .first-third {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .first-third img {
    width: 20px;
  }
  .second {
    display: flex;
    justify-content: center;
  }
  .second-first, .second-second, .second-third {
    width: 33.3vw;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .number {
    font-weight: bold;
    font-size: 22px;
    color: #fd8975;
  }
  .cn {
    font-size: 15px;
    color: #717171;
  }
</style>