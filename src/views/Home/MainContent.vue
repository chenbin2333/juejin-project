<template>
  <main class="container">
    <div class="view">
      <!-- 内容导航 -->
      <nav class="view-nav" :class="{'top':top}"></nav>
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
  background-color: #2c3e50;
  transition: all .2s;
  transform: translateZ(0);
}

.top {
  transform: translate3d(0, -5rem, 0);
}
.main-content {
  /*height: 5000px;*/
}
</style>