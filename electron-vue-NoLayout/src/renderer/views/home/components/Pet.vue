<template>
  <div class="pet">
    <custom-title title="心爱宠物"></custom-title>
    <ul v-mm-loading="petLoading">
        <li v-for="index in list" :key="index">
            <img class="animate__animated animate__rotateInUpRight" :src="require('@/assets/pet/pet-' + (index - 1) + '.png')" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
import CustomTitle from './CustomTitle.vue';
export default {
  name: 'pet',
  components: { CustomTitle },
  data() {
    return {
      list: 0,
      petLoading: false
    }
  },
  mounted() {
    this.petLoading = true
    setTimeout(() => {
      this.petLoading = false
      this.list = 10
    }, 3500)
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pet {
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        height: 260px;
        li {
            flex: 0 0 20%;
            height: 130px;
            list-style: none;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 100px;
                height: 100px;
                border-radius: 8px;
                box-shadow: 2px 0 6px rgba(0,21,41,.15);
                padding: 7px;
            }
        }
    }
}
</style>
