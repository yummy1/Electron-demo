<template>
    <div class="loading-bounce">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
</template>

<script>
export default {
    name: 'loading2'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
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
</style>