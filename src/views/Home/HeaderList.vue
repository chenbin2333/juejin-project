<template>
  <div id="header-list">
    <div
      class="header-list-item"
      v-for="(item,index) in titles"
      :key="index"
      :class="{active:index===currentIndex}"
      @click="headerlist(index)"
    >
      <span>
        <a href="#">{{item}}</a>
      </span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    titles: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    headerlist (index) {
      this.currentIndex = index;
    }
  }
}
</script>

<style scoped>
#header-list {
  display: flex;
  font-size: 15px;
  text-align: center;
  background-color: #fff;
  height: 100%;
  line-height: 100%;
  margin: auto;
  width: 390px;
  height: 100%;
  margin-left: 156px;
  align-items: center;
  justify-content: space-between;
  position: absolute;
}
.header-list-item {
  color: #515767;
  font-size: 14px;
}
.active a:first-child {
  color: #1e80ff;
}
.header-list-item span{
  /* padding: 10px; */
  padding-bottom: 21px;
  line-height: 100%;
}
.header-list-item span a{
  text-decoration: none;
  color:#000;
  padding-bottom: 21px;
  line-height: 100%;
}
.active span a:hover {
  border-bottom: 3px solid #1e80ff;
}

</style>