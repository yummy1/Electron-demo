<template>
    <div class="loading-line">
      <span></span>
    </div>
</template>

<script>
export default {
    name: 'loading11'
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
$bg-color-start: #4715d8;
$bg-color-end: #e94960;
/**loading-line start**/
.loading-line {
  width: 150px;
  height: 4px;
  border-radius: 2px;
  margin: 0 auto;
  position: relative;
  background: $bg-color-start;
  -webkit-animation: changeBgColor 1.04s ease-in infinite alternate;
  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: $bg-color-start;
    position: absolute;
    margin-top: -7px;
    margin-left: -8px;
    -webkit-animation: changePosition 1.04s ease-in infinite alternate;
  }
}
@-webkit-keyframes changeBgColor {
  0% {
    background: $bg-color-start;
  }
  100% {
    background: $bg-color-end;
  }
}
@-webkit-keyframes changePosition {
  0% {
    background: $bg-color-start;
  }
  100% {
    margin-left: 142px;
    background: $bg-color-end;
  }
}
/**loading-line end**/
</style>