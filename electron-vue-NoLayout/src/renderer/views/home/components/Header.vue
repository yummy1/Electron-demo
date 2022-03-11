<template>
  <div class="app-header">
    <div class="left-header">
      <div @click="goBack">
        <svg-icon v-if="hasBack" class-name="back" icon-class="back"></svg-icon>
      </div>
      <img src="@/assets/logo.png" alt="">
      <h4>闲聊</h4>
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
  name: 'app-header',
  props: {
    hasBack: {
      type: Boolean,
      default: false
    }
  },
  computed: {
      ...mapGetters(['name', 'avatar'])
  },
  methods: {
    goBack() {
      console.log('back')
      this.$router.back()
    }
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-header {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0 6px rgba(0,21,41,.15);
  border-bottom: 1px solid #efefef;
  .left-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    .back {
      margin-left: 20px;
      width: 1.2em;
      height: 1.2em;
    }
    img {
      width: 50px;
      height: 60px;
      margin-bottom: -10px;
      margin-left: 80px;
    }
    h4 {
      margin-left: 20px;
      font-size: 34px;
      background: linear-gradient(to right, red, #2627E5);
      -webkit-background-clip: text;
      color: transparent;
      font-family: "宋体";
      font-weight: 600;
    }
  }
  .right-header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: #454545;
    font-size: 14px;
    margin-right: 15px;
    img {
      width: 40px;
      height: 40px;
      margin-right: 5px;
    }
  }
}
</style>
