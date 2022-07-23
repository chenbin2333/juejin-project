<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    router
  >
    <el-menu-item
      :style="{ fontSize: fontSize }"
      v-for="(item, index) in list"
      :index="item.path"
      :key="index"
      >{{ item.name }}</el-menu-item
    >
  </el-menu>
</template>

<script>
export default {
  props: {
    list: Array,
    fontSize: String
  },
  name: 'NavBar',
  data () {
    return {
      activeIndex: '/home',
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
  color: #409eff;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
</style>