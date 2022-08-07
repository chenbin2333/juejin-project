<template>
  <!--      点赞收藏区-->
  <div class="article-suspended-panel">
    <div class="panel-btn active with-badge">
      <svg class="sprite-icon icon-zan">
        <use xlink:href="#icon-zan"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticleRight"
}
</script>

<style lang="less" scoped>

.article-suspended-panel {
  position: fixed;
  margin-left: -7rem;
  top: 140px;
  z-index: 2;
  width: 49px;
  height: 429px;
  .panel-btn {
    position: relative;
    margin-bottom: 1.667rem;
    width: 4rem;
    height: 4rem;
    background-color: #fff;
    background-repeat: no-repeat;
    border-radius: 50%;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 4%);
    cursor: pointer;
    text-align: center;
    font-size: 1.67rem;
  }
}
</style>