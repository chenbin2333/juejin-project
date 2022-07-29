<template>
  <div id="_layout">
    <div id="juejin">
      <router-view></router-view>
      <div class="global-component-box"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  name: 'Layout',
  components: {
  },
  created() {
  },
  methods: {
    handleScroll() {
      //为了保证兼容性，这里取两个值，哪个有值取哪一个
      //scrollTop就是触发滚轮事件时滚轮的高度
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.$store.commit('isVisible', scrollTop <= 300)
      console.log("滚动距离" + scrollTop);
      this.$store.commit('isTop', scrollTop >= 300)
      this.$store.commit('isAdvertisement', scrollTop >= 1600)
    },
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
#_layout, #juejin {
  width: 100%;
}
</style>
