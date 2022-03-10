<template>
  <div class="chat-list">
      <div class="chat-user">
          <img :src="require(`@/assets/chat/chat-user-${item.avatar}.png`)" alt="">
          <span>{{ item.name }}</span>
      </div>
      <p>{{ item.text }}</p>
  </div>
</template>

<script>
export default {
  name: 'chat-list',
  props: {
    item: {
        type: Object,
        default: {}
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.chat-list {
    padding: 10px 15px;
    border-bottom: 1px solid #efefef;
    .chat-user {
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: purple;
        img {
            width: 40px;
            height: 40px;
            margin-right: 5px;
        }
    }
    p {
        color: #454545;
        font-size: 14px;
        margin: 5px 0;
    }
}
</style>
