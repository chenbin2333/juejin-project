<template>
  <main class="article-container">
    <div class="content">
      <div class="main-area article-area"></div>
      <div class="sidebar"></div>
      <div class="article-suspended-panel"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Article"
}
</script>

<style lang="less" scoped>
.article-container{
  position: relative;
  margin: 0 auto;
  width: 1140px;
  .content{
    margin-top: 1.767rem;
    padding: 0 0 8rem;
    min-height: 5000px;
    .article-area{
      margin-bottom: 1.5rem;
    }
    .main-area {
      position: relative;
      width: 820px;
      max-width: 100%;
      height:4000px;
      box-sizing: border-box;
      background-color:red;
    }
    .sidebar {
      position: absolute;
      top: 0;
      right: 0;
      width: 25rem;
      height:2000px;
      background-color: #1e80ff;
    }
    .article-suspended-panel{
      position: fixed;
      margin-left: -7rem;
      top: 140px;
      z-index: 2;
      width:49px;
      height:429px;
      background-color: yellow;
    }
  }
}
</style>