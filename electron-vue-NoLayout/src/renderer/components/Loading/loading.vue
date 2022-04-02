<template>
  <div class="cus-loading" v-if="flag" @click.prevent.stop @touchstart.prevent.stop @touchmove.prevent.stop>
    <div class="cus-loading-cont">
      <div class="loading-bounce" v-show="iconFlag">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="cus-loading-cont-txt" v-if="txtFlag">{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      flag: false,
      iconFlag: true,
      txtFlag: true,
      title: ''
    }
  },
  props: {

  },
  methods: {
    open(){
      this.flag = true
    },
    close(){
      this.flag = false
    },
    // 可以绑定这个阻止默认行为和冒泡，上边直接使用的修饰符
    stopPropagation(e){
      e.stopPropagation()
      e.preventDefault()
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.cus-loading{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  background: rgba(0,0,0,0.75);
  z-index: 99;
  .cus-loading-cont{
    width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /**loading-bounce start**/
    .loading-bounce {
      width: 80px;
      height: 40px;
      margin: 0 auto;
      text-align: center;
      span {
        display: inline-block;
        user-select: none;
        width: 8px;
        height: 100%;
        border-radius: 4px;
        background: #4715d8;
        animation: load 1s ease infinite;
      }
      span:nth-child(2) {
        animation-delay: 0.2s;
      }
      span:nth-child(3) {
        animation-delay: 0.4s;
      }
      span:nth-child(4) {
        animation-delay: 0.6s;
      }
      span:nth-child(5) {
        animation-delay: 0.8s;
      }
    }
    @keyframes load {
      0%,
      100% {
        height: 40px;
        background: #4715d8;
      }
      50% {
        height: 70px;
        margin: -15px 0;
        background: #e94960;
      }
    }
    .cus-loading-cont-txt{
      text-align: center;
      color: #FFFFFF;
      font-size: 14px;
      letter-spacing: 2px;
      margin-top: 30px;
    }
  }
}
</style>

