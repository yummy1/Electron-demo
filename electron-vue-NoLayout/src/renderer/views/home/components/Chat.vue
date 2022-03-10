<template>
  <div class="chat">
    <custom-title title="聊聊"></custom-title>
    <chart-list v-for="(item, index) in list" :key="index" :item="item"></chart-list>
  </div>
</template>

<script>
import CustomTitle from './CustomTitle.vue';
import ChartList from './ChatList.vue'
export default {
  name: 'chat',
  components: { CustomTitle, ChartList },
  data() {
      return {
          list: [
              {
                  name: '李丽',
                  avatar: '0',
                  text: '今天天气真好！'
              },
              {
                  name: '张峰',
                  avatar: '1',
                  text: '今天三八妇女节，公司组织了插花，我插了很多花，很满意😁！'
              },
              {
                  name: '孙宁',
                  avatar: '2',
                  text: '啦啦啦'
              },
              {
                  name: '王一鸣',
                  avatar: '1',
                  text: '祝贺中国冬奥会夺得了9金4银'
              },
              {
                  name: '樊修远',
                  avatar: '2',
                  text: '今天在蚂蚁森林种了一棵树哦！'
              },
              {
                  name: '杨海龙',
                  avatar: '1',
                  text: '人生真奇妙！'
              }
          ]
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.chat {
    height: 100%;
}
</style>
