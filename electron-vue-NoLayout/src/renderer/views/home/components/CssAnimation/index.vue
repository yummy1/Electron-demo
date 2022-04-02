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
        <li>
          <loading-3 class="animate__animated animate__backInLeft animate__delay-2s"></loading-3>
        </li>
        <li>
          <loading-4 class="animate__animated animate__backInLeft animate__delay-2s"></loading-4>
        </li>
        <li>
          <loading-5 class="animate__animated animate__backInLeft animate__delay-2s"></loading-5>
        </li>
        <li>
          <loading-6 class="animate__animated animate__backInLeft animate__delay-2s"></loading-6>
        </li>
        <li>
          <loading-7 class="animate__animated animate__backInLeft animate__delay-2s"></loading-7>
        </li>
        <li>
          <loading-8 class="animate__animated animate__backInLeft animate__delay-2s"></loading-8>
        </li>
        <li>
          <loading-9 class="animate__animated animate__backInLeft animate__delay-2s"></loading-9>
        </li>
        <li>
          <loading-10 class="animate__animated animate__backInLeft animate__delay-2s"></loading-10>
        </li>
        <li>
          <loading-11 class="animate__animated animate__backInLeft animate__delay-2s"></loading-11>
        </li>
        <li>
          <loading-12 class="animate__animated animate__backInLeft animate__delay-2s"></loading-12>
        </li>
      </ul>
    </div>
</template>

<script>
import CustomTitle from '../CustomTitle.vue';
import Loading from './components/Loading.vue';
import Loading10 from './components/Loading10.vue';
import Loading11 from './components/Loading11.vue';
import Loading12 from './components/Loading12.vue';
import Loading2 from './components/Loading2.vue';
import Loading3 from './components/Loading3.vue';
import Loading4 from './components/Loading4.vue';
import Loading5 from './components/Loading5.vue';
import Loading6 from './components/Loading6.vue';
import Loading7 from './components/Loading7.vue';
import Loading8 from './components/Loading8.vue';
import Loading9 from './components/Loading9.vue';
import Wave from './components/Wave.vue';
export default {
  name: 'animation',
  components: { CustomTitle, Wave, Loading, Loading2, Loading3, Loading4, Loading5, Loading6, Loading7, Loading8, Loading9, Loading10, Loading11, Loading12 }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.animation {
  height: 260px;
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