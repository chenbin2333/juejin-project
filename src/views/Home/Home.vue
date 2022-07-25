<template>
  <div class="home">
    <div class="firstDiv">
      <ul class="home-header ban-xin">
        <li v-for="(item, index) in navList" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <CotentList :contentList="contentList"></CotentList>
    <div class="loading">{{ loading ? "加载中" : "已经到底啦!~" }}</div>
  </div>
</template>

<script>
import CotentList from './CotentList.vue'
import { getHomeNav, getHomeCotentList } from '../../api/index'

export default {
  data () {
    return {
      navList: [],
      contentList: [],
      index: 0,
      obj: {},
      loading: true
    }
  },
  created () {
    this.getNav()
    this.getHomeCotent()
  },
  components: {
    CotentList,
  },
  methods: {
    async getNav () {
      let { data } = await getHomeNav()
      this.navList = data.navList
    },
    async getHomeCotent () {
      let { data } = await getHomeCotentList()
      for (let i = 0; i < Math.ceil(data.List.length / 5); i++) {
        this.obj[i] = data.List.slice(5 * i, 5 * (i + 1))
      }
      console.log(this.obj)
      this.contentList = this.obj[this.index]
    },
    scrollFn () {
      // console.log('123')
      // 获取窗口高度winHeight，滚动出去的长度st，文档的长度docHeight
      let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      let st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let docHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (winHeight + st >= docHeight) {
        console.log('触底了')
        this.loading = true
        this.index++
        if (this.index >= Object.keys(this.obj).length - 1) {
          this.loading = false
          return
        }
        this.contentList.push(...this.obj[this.index])
        console.log(this.contentList)
      }
    }
  },
  mounted () {
    // 监听滚动
    window.addEventListener('scroll', this.scrollFn)
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
.loading {
  margin-top: 10px;
  background: #fff;
  text-align: center;
}
</style>