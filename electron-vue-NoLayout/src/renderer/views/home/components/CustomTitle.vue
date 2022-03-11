<template>
  <div class="title">
    <i></i>
    {{title}}
  </div>
</template>

<script>

export default {
  name: 'custom-title',
  props: {
      title: {
          type: String,
          default: '标题'
      }
  },
  computed: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.title {
    height: 40px;
    line-height: 40px;
    color: #454545;
    padding-left: 15px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #efefef;
    border-top: 1px solid #efefef;
    background: #FFF9FF;
    i {
      display: inline-block;
      width: 3px;
      height: 14px;
      background: skyblue;
      margin-right: 7px;
    }
}
</style>
