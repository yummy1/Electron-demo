<template>
  <div class="app-container">
    <app-header></app-header>
    <div class="app-body">
      <div class="left-body">
        <breakfast></breakfast>
        <pet></pet>
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
export default {
  name: 'dashboard',
  components: {appHeader, Breakfast, Pet, Chat}
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
