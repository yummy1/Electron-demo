<template>
  <div class="breakfast">
    <custom-title title="营养早餐"></custom-title>
    <ul v-debounce-loading="breakfastLoading">
        <li v-for="index in list" :key="index" @click="gotoBreakfastDetail(index)">
            <img class="animate__animated animate__tada" :src="require('@/assets/breakfast/breakfast-' + (index - 1) + '.png')" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
import CustomTitle from './CustomTitle.vue';
export default {
  name: 'breakfast',
  components: { CustomTitle },
  data() {
    return {
      list: 0,
      breakfastLoading: false
    }
  },
  mounted() {
    this.breakfastLoading = true
    setTimeout(() => {
      this.breakfastLoading = false
      this.list = 10
    }, 3000)
  },
  methods: {
    gotoBreakfastDetail(index) {
        this.$router.push({path: '/breakfastDetail', query: {index}})
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.breakfast {
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 220px;
        li {
            flex: 0 0 20%;
            height: 110px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 90px;
                height: 90px;
                border-radius: 52px;
                box-shadow: 2px 0 6px rgba(0,21,41,.15);
                padding: 7px;
            }
        }
    }
}
</style>
