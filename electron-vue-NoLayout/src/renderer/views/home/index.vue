<template>
  <div class="app-container">
    <app-header></app-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import appHeader from './components/Header.vue'
export default {
  name: 'dashboard',
  components: {appHeader},
  computed: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
