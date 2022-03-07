<template>
  <div class="app-header">
    <div class="left-header">
      <img src="@/assets/logo.png" alt="">
    </div>
    <div class="right-header">
      <img src="@/assets/avatar.png" alt="">
      <span>{{name ? name : '登录'}}</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'appHeader',
  computed: {
      ...mapGetters('name', 'avatar')
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 6px rgba(0,21,41,.15);
  .left-header {
    img {
      width: 50px;
      height: 60px;
      margin-bottom: -10px;
      margin-left: 80px;
    }
  }
  .right-header {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #454545;
    font-size: 14px;
    margin-right: 10px;
    img {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
