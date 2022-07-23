<template>
  <div class="layout">
    <div class="firstdiv">
      <header class="ban-xin layout-header">
        <div class="logo">
          <img src="../assets/images\/png/logo.svg" alt="" />
        </div>
        <NavBar :list="navList" :fontSize="'16px'"></NavBar>
      </header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'

export default {
  data () {
    return {
      navList: [{
        name: '首页',
        path: '/home'
      }, {
        name: '沸点',
        path: '/feidian'
      }, {
        name: '话题',
        path: '/huati'
      }, {
        name: '小册',
        path: '/xiaoce'
      }]
    }
  },
  name: 'HomeView',
  components: {
    NavBar,
    NavBar
  },
}
</script>

<style lang="less" scoped>
.layout .firstdiv {
  border-bottom: 1px solid #ddd;
  background: #fff;
}
.layout-header {
  display: flex;
  background: #fff;
  .logo {
    img {
      width: 120px;
      margin-top: 17px;
      margin-right: 20px;
    }
  }
}
</style>
