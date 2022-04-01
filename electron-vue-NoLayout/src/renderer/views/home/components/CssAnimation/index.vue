<template>
    <div class="animation">
      <custom-title title="有趣动画"></custom-title>
      <ul>
        <li>
          <wave class="animate__animated animate__backInDown animate__delay-1s"></wave>
        </li>
        <li>
          <loading class="animate__animated animate__backInLeft animate__delay-2s"></loading>
        </li>
        <li>
          <loading2 class="animate__animated animate__backInLeft animate__delay-2s"></loading2>
        </li>
      </ul>
    </div>
</template>

<script>
import CustomTitle from '../CustomTitle.vue';
import Loading from './components/Loading.vue';
import Loading2 from './components/Loading2.vue';
import Wave from './components/Wave.vue';
export default {
  name: 'animation',
  components: { CustomTitle, Wave, Loading, Loading2 }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.animation {
  height: 100px;
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
            flex: 0 0 20%;
            height: 130px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
}
</style>