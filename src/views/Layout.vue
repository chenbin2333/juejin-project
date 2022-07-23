<template>
  <div class="layout">
    <div class="firstdiv">
      <header class="ban-xin layout-header">
        <div class="logo">
          <img src="../assets/images\/png/logo.svg" alt=""/>
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
import NavBar from '../components/NavBar.vue'
import indexApi from '../api/index.js'

export default {
  data() {
    return {
      navList: []
    }
  },
  name: 'HomeView',
  components: {
    NavBar,
  },
  created() {
    this.getList()
  },
  methods: {
    getList() {
      indexApi.test3(1).then((res) => {
        this.navList = res.data.navList
      });
    }
  }
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
