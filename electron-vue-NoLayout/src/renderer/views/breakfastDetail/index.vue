<template>
  <div class="app-container">
      <app-header :hasBack="true"></app-header>
      <img :src="require('@/assets/breakfast/breakfast-0.png')" alt="">
  </div>
</template>

<script>
import appHeader from '@/views/home/components/Header.vue'
export default {
  name: 'breakfast',
  components: {appHeader},
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
img {
    width: 100px;
    height: 100px;
    margin: 20px;
}
</style>
