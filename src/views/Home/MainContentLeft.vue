<template>
  <div class="main-content-left">
    <!-- 内容列表 -->
    <ContentList :contentList="contentList"></ContentList>
    <!--    <div class="loading">{{ loading ? "加载中" : "已经到底啦!~" }}</div>-->
  </div>
</template>
<script>
import ContentList from './CotentList.vue'
import {getHomeCotentList} from '../../api/index'

export default {
  name: "MainContentLeft",
  data() {
    return {
      contentList: [],
      // index: 0,
      // obj: {},
      // loading: true
    }
  },
  created() {
    this.getHomeCotent()
  },
  components: {
    ContentList,
  },
  methods: {
    async getHomeCotent() {
      // let { data } = await getHomeCotentList()
      // for (let i = 0; i < Math.ceil(data.List.length / 5); i++) {
      //   this.obj[i] = data.List.slice(5 * i, 5 * (i + 1))
      // }
      // console.log(this.obj)
      // this.contentList = this.obj[this.index]

      let {data} = await getHomeCotentList()
      this.contentList = data.List
      console.log(this.contentList.length)
    },
    scrollFn() {
      // console.log('123')
      // 获取窗口高度winHeight，滚动出去的长度st，文档的长度docHeight
      // let winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
      // let st = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // let docHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      // if (winHeight + st >= docHeight) {
      //   console.log('触底了')
      //   this.loading = true
      //   this.index++
      //   if (this.index >= Object.keys(this.obj).length - 1) {
      //     this.loading = false
      //     return
      //   }
      //   this.contentList.push(...this.obj[this.index])
      //   console.log(this.contentList)
      // }
    }
  },
  mounted() {
    // 监听滚动
    // window.addEventListener('scroll', this.scrollFn)
  }
}
</script>

<style scoped>
.main-content-left {
  margin-right: 21.667rem;
  border-radius: 2px;
  width: 700px;
  height: 100%;
  background-color: #2c3e50;
}

.loading {
  margin-top: 10px;
  background: #fff;
  text-align: center;
}
</style>