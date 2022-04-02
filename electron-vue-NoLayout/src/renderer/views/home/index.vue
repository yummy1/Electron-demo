<template>
  <div class="app-container">
    <app-header></app-header>
    <div class="app-body">
      <div class="left-body">
        <breakfast></breakfast>
        <pet></pet>
        <!-- <css-animation></css-animation> -->
      </div>
      <chat class="right-body"></chat>
    </div>
  </div>
</template>

<script>
import appHeader from './components/Header.vue'
import Breakfast from './components/Breakfast.vue'
import Pet from './components/Pet.vue'
import Chat from './components/Chat.vue'
import CssAnimation from './components/CssAnimation'
export default {
  name: 'dashboard',
  components: {appHeader, Breakfast, Pet, Chat, CssAnimation},
  data() {
    return {
      
    }
  },
  mounted() {
    // // 修改参数
    // let loading2 = this.$CusLoading({
    //   flag: false, // 关闭状态 true 为开启，可调用当前实例的 open 方法手动打开
    //   iconFlag: true, // 隐藏动画
    //   txtFlag: true, // 加载文案状态，false 为不展示
    //   title: '加载中' // 自定义加载文案
    // })
    // loading2.open() // 手动开启
    // setTimeout(() => {
    //   loading2.close() // 手动关闭
    // }, 3000)
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-body {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  .left-body {
    width: 60%;
    height: 100%;
    border-right: 1px solid #efefef;
  }
  .right-body {
    width: 40%;
    height: 100%;
  }
}
</style>
