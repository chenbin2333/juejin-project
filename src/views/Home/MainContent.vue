<template>
  <main class="container">
    <div class="view">
      <!-- 内容导航 -->
      <nav class="view-nav" :class="{'top':top}">
      <div class="level-2">
       <div class="left">
                    <a href="#" style="color: #1e80ff; padding-left: 0;">综合</a>
                    <a href="#">关注</a>
                    <a href="#">后端</a>
                    <a href="#">前端</a>
                    <a href="#">Android</a>
                    <a href="#">iOS</a>
                    <a href="#">人工智能</a>
                    <a href="#">开发工具</a>
                    <a href="#">代码人生</a>
                    <a href="#">阅读</a>
                </div>
                <div class="right">
                    <a href="#" class="label">标签管理</a>
                </div>
                </div>
      </nav>
      <div class="main-content">
        <!-- 左 -->
        <MainContentLeft></MainContentLeft>
        <!-- 右 -->
        <MainContentRight></MainContentRight>
      </div>
    </div>
  </main>
</template>

<script>
import MainContentLeft from "./MainContentLeft";
import MainContentRight from "./MainContentRight";

export default {
  name: "MainContent",
  components: {
    MainContentLeft,
    MainContentRight
  },
  data() {
    return {}
  },
  computed: {
    top() {
      return this.$store.state.top
    }
  }
}
</script>

<style scoped>
.view {
  margin-top: 4.67rem;
}

.view-nav {
  position: fixed;
  left: 0;
  top: 5rem;
  width: 100%;
  height: 3.833rem;
  z-index: 100;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  background-color: #fff;
  transition: all .2s;
  transform: translateZ(0);
}

.top {
  transform: translate3d(0, -5rem, 0);
}
.level-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: min-content;
    max-width: 960px;
    margin: 0 auto;


    font-size: 13.92px;
    line-height: 46px;
}

.level-2 .right {
    display: flex;
    justify-content: end;
}

.level-2 .right .label {
    padding-right: 0;
}

.level-2 a {
    color: #71777c;
    padding: 0 12px;
}

.level-2 a:hover {
    color: #1e80ff;
}
.main {
    margin: 0 auto;
    margin-top: 116px;
    display: flex;
    justify-content: center;
}
.left {
    width: 700px;
    background: #fff;
    


    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
}
  a{text-decoration: none;}


.main-content {
  /*height: 5000px;*/
}
</style>