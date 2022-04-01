<template>
  <div class="pet">
    <custom-title title="心爱宠物"></custom-title>
    <ul>
        <li v-for="index in 10" :key="index">
            <img class="animate__animated animate__bounce" :src="require('@/assets/pet/pet-' + (index - 1) + '.png')" alt="">
        </li>
    </ul>
  </div>
</template>

<script>
import CustomTitle from './CustomTitle.vue';
export default {
  name: 'pet',
  components: { CustomTitle }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.pet {
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
