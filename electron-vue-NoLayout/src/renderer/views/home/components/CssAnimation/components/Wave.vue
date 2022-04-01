<template>
    <div class="dragPay">
        <div class="wave">
            <span>⛽️</span>
        </div>
        <div class="waveMask"></div>
    </div>
</template>

<script>
export default {
  name: 'wave',
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dragPay {
      position: relative;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      border: 3px solid #20c961;
      background: #ffffff;
      overflow: hidden;
      padding: 5px;
      box-sizing: border-box;
      .wave {
        position: relative;
        left: -8px;
        width: 60px;
        height: 60px;
        background-image: linear-gradient(-180deg, #8dec8a 13%, #70cf23 91%);
        border-radius: 50%;
        line-height: 60px;
        text-align: center;
        font-size: 32px;
        cursor: pointer;
    }
    .waveMask {
        position: absolute;
        width: 120px;
        height: 120px;
        top: 0;
        left: 50%;
        border-radius: 40%;
        background-color: rgba(255, 255, 255, 0.9);
        transform: translate(-50%, -82%) rotate(0);
        animation: toRotate 10s linear -5s infinite;
        z-index: 20;
        pointer-events: none;
    }
}
@keyframes toRotate {
    50% {
    transform: translate(-50%, -70%) rotate(180deg);
    }
    100% {
    transform: translate(-50%, -70%) rotate(360deg);
    }
}
</style>