<template>
  <div class="main-header-box">
    <header :class="{'main-header':true,'visible':isVisible}">
      <!-- 导航栏内容 -->
      <div class="container">
        <!-- logo -->
        <a href="#" class="logo">
          <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/e08da34488b114bd4c665ba2fa520a31.svg"
               alt="">
        </a>
        <!-- nav -->
        <header-list
            :titles="['首页','沸点','课程','直播','活动','商城','APP','插件']"
            class="header-list"
        />
        <!-- search -->
        <div class="search">
          <div class="search-item">
            <input type="search" maxlength="32" placeholder="探索稀土掘金"/>
            <div class="img-contanter">
              <img src="https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/1e8ab9a22f0ddc36349f60b38900d0bd.svg"
                   alt="搜索"/>
            </div>
          </div>
        </div>
        <!-- btn -->
        <div class="btn">
          <button>创作者中心</button>
          <div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"
                 data-v-75290ab2="">
              <path
                  d="M2.45025 4.82383C2.17422 4.49908 2.40501 4 2.83122 4H9.16878C9.59499 4 9.82578 4.49908 9.54975 4.82382L6.38097 8.5518C6.1813 8.7867 5.8187 8.7867 5.61903 8.5518L2.45025 4.82383Z"
                  fill="white" data-v-75290ab2=""></path>
            </svg>
          </div>
        </div>
        <!-- notice -->
        <div class="notice">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
               data-v-75290ab2="">
            <path
                d="M6.01132 10.2856C6.28115 6.54234 8.68619 4.28564 11.9999 4.28564C15.3136 4.28564 17.7186 6.54234 17.9885 10.2856C18.1219 12.1363 18.4093 13.708 19.9473 15.8848C20.1889 16.2267 19.953 16.7142 19.5343 16.7142H4.46546C4.04679 16.7142 3.81092 16.2267 4.05252 15.8848C5.59053 13.708 5.87793 12.1363 6.01132 10.2856Z"
                stroke-width="1.5" stroke-linecap="round" data-v-75290ab2=""></path>
            <path d="M11.9573 3.21436V4.28578" stroke-width="3" stroke-linecap="round" data-v-75290ab2=""></path>
            <path
                d="M9.57495 18.8569C9.92795 19.8557 10.8804 20.5712 12.0001 20.5712C13.1197 20.5712 14.0722 19.8557 14.4252 18.8569H9.57495Z"
                stroke-linecap="round" stroke-linejoin="round" data-v-75290ab2=""></path>
          </svg>
        </div>
        <!-- img -->
        <div class="head-img">
          <img
              src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/27/171b9105d3a12925~tplv-t2oaga2asx-no-mark:100:100:100:100.awebp"
              alt="喵桑"/>
        </div>
      </div>
      <!-- 内容导航 -->
    </header>
  </div>
</template>

<script>
import HeaderList from '../views/Home/HeaderList';

export default {
  name: "Header",
  data() {
    return {}
  },
  created() {

  },
  components: {
    HeaderList,
  },

  computed: {
    isVisible() {
      return this.$store.state.visible
    }
  }
}
</script>

<style scoped>
.main-header-box {
  position: relative;
  height: 5rem;
}

.main-header {
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  z-index: 250;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s;
  transform: translate3d(0, -100%, 0);
}

.visible {
  transform: translate3d(0, 0, 0);
}

.container {
  /* background-color: red; */
  margin: auto;
  width: 1440px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo img {
  float: left;
  width: 107px;
  height: 22px;
  line-height: 100%;
  margin-left: 24px;
  justify-content: space-between;

}

.search {
  padding-left: 560px;
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0 auto;
}

.search-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  border: 1px solid #c2c8d1;
  border-radius: 4px;
}

.search-item:hover {
  border: 1px solid #999;
  border-radius: 4px;
}

.search-item > input {
  border: none;
  padding: .6rem 0 .6rem 1rem;
  box-shadow: none;
  outline: none;
  width: 316px;
  font-size: 14px;
  color: #8a919f;
  background-color: transparent;
  transition: width .3s;
}

.search-item .img-contanter {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 44px;
  background: #f2f3f5;
  border-radius: 2px;
}

.img-contanter > img {
  cursor: pointer;
}

.btn {
  display: flex;
  align-items: center;
  height: 36px;
  padding-right: 100px;
}

.btn > button {
  border: none;
  border-radius: 3px 0 0 3px;
  width: 94px;
  height: 100%;
  color: #fff;
  background-color: #1e80ff;
  cursor: pointer;
}

.btn > button:hover {
  background-color: #1171ee;
}

.btn > div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 100%;
  background-color: #1e80ff;
  border-left: 1px solid hsla(0, 0%, 100%, .1);
  border-radius: 0 3px 3px 0;
  cursor: pointer;
}

.btn > div:hover {
  background-color: #1171ee;
}

.notice {
  margin-left: -25px;
  display: flex;
  align-items: center;
  /* padding-right: 70px; */
}

.notice > svg {
  fill: #8a919f;
  stroke: #8a919f;
  cursor: pointer;
}

.notice > svg:hover {
  fill: #515767;
  stroke: #515767;
}

.head-img {
  display: block;
  margin-left: 27px;
}

.head-img > img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #eee;
  cursor: pointer;
}

</style>