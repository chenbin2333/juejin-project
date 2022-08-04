<template>
<div class="main-content-left">
    <div class="list-header">
                    <span style="color: #1e80ff;">推荐</span>
                    <span>最新</span>
                    <span class="last">热榜</span>
                </div>
    <div class="list-content">
    <!-- 内容列表 -->
    <ContentList :contentList="contentList"></ContentList>
    <!--    <div class="loading">{{ loading ? "加载中" : "已经到底啦!~" }}</div>-->
  </div>
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
    width: 700px;
    background: #fff;

    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
    border-radius: 2px;
}
.list-header {
    display: flex;
    border-bottom: 1px solid hsla(0,0%,59.2%,.1);
    padding: 15.6px 0 15px 11px;
}

.list-header>span {
  
    border-right: 1px solid hsla(0,0%,59.2%,.2);
    padding: 0 14px 0 14px;
    font-size: 14.04px;
    color: #909090;
    cursor: pointer;
}

.list-header>span:hover {
    color: #007fff;
}

.list-header .last {
    border-right: none;
}

.list-content {
    cursor: pointer;
}

.list-content:hover {
    background: #fafafa;
}
.loading {
  margin-top: 10px;
  background: #fff;
  text-align: center;
}
</style>
