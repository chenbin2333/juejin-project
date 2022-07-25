<template>
  <div class="content-item">
    <div class="l">
      <p>{{ listItem.author }}</p>
      <h3>{{ listItem.title }}</h3>
      <p>{{ listItem.category }}</p>
    </div>
    <div class="r">
      <img :src="listItem.img" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      default: () => { }
    }
  }
}
</script>

<style lang="less" scoped>
.content-item {
  height: 158px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  p {
    font-size: 14px;
    color: #bbb;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
  img {
    width: 60px;
    height: 60px;
  }
}
</style>