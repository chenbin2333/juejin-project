<template>
  <div class="home">
    <div class="firstDiv">
      <ul class="home-header ban-xin">
        <li>推荐</li>
        <li>后端</li>
        <li>前端</li>
        <li>Android</li>
        <li>iOS</li>
        <li>人工智能</li>
        <li>开发工具</li>
        <li>代码人生</li>
      </ul>
    </div>
    <CotentList></CotentList>
  </div>
</template>

<script>
import CotentList from './CotentList.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    CotentList,

  }
}
</script>

<style lang="less" scoped>
.firstDiv {
  background: #fff;
}
.home-header {
  display: flex;
  li {
    padding: 18px;
    font-size: 14px;
    color: #aaa;
  }
}
</style>