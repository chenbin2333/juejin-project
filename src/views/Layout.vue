<template>
  <div id="_layout">
    <div id="juejin">
      <HomeContainer></HomeContainer>
      <div class="global-component-box"></div>
      <!-- 方便我写页面不用管,位置要是不合适你们可以放到其他地方-->
     <button class="report" @click="go">点我跳转举报页面</button>
    </div>
  </div>
</template>

<script>
import HomeContainer from "@/views/Home/HomeContainer";
export default {
  data() {
    return {}
  },
  name: 'Layout',
  components: {
    HomeContainer
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
      this.$store.commit('isSticky', scrollTop >= 800)
      this.$store.commit('isRoll', scrollTop)
    },
    //跳转到举报页面
    go() {
      this.$router.push('/report')
    }
  },
  mounted() {
    document.addEventListener("scroll", this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
#_layout, #juejin {
  width: 100%;
  background-color: #f4f5f5;
}
.report{
  width: 150px;
  height: 50px;
  position: fixed;
  bottom: 50px;
  right: 50px;
}
</style>
