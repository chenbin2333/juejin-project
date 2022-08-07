<template>
  <!--      右边侧边栏-->
  <div class="sidebar">
    <!--        作者简介-->
    <div class="sidebar-block author-block">

    </div>
    <!--        下载APP-->
    <div class="sidebar-block app-download-sidebar-block"></div>
    <!--        相关文章-->
    <div class="sidebar-block related-entry-sidebar-block"></div>
    <!--        目录-->
    <div  class="sticky-block-box"  :class="{'sticky':sticky}" ></div>
  </div>
</template>

<script>
export default {
  name: "ArticleLeft",
  computed: {
    sticky() {
      return this.$store.state.sticky
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
  height: 2000px;
  //background-color: #1e80ff;
  .author-block{
    border-radius: 4px;
    //background: #fff;
    padding: 1.667rem;
    height:150px;
    background-color: red;
  }
  .app-download-sidebar-block{
    box-shadow: none;
    border-radius: 4px;
    height:90px;
    background-color: #1e80ff;
  }
  .related-entry-sidebar-block{
    height: 430px;
    background-color: yellow;
  }
  .sticky-block-box{
    height: 450px;
    background-color:black;
  }
  .sticky{
    position: fixed;
    top: 1.767rem;
    width: inherit;
    transition: top .2s;
  }
  .sidebar-block{
    margin-bottom: 20px;
    position: relative;
    border-radius: 2px;
  }
}

</style>