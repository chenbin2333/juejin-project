<template>
  <div class="content-item" @click="goArticle">
    <div class="l">
      <p>{{ listItem.author }}</p>
      <h3>{{ listItem.title }}</h3>
      <p>{{ listItem.category }}</p>
    </div>
    <div class="r">
      <img :src="listItem.img" alt=""/>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listItem: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    goArticle() {
      this.$router.push('/article')
    }
  }
}
</script>

<style lang="less" scoped>
.content-item {
  height: 141px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;

  p {
    font-size: 14px;
    color: #bbb;
    width: 460px;
    overflow:hidden;
	  text-overflow:ellipsis;
	  white-space:nowrap

  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }

  img {
    width: 120px;
    height: 80px;
    margin-top: 20px;
  }
}
</style>