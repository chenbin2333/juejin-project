<template>
  <div class="content-list ban-xin">
    <ContentItem v-for="i in 10" :key="i"></ContentItem>
  </div>
</template>

<script>
import ContentItem from './ContentItem.vue'
export default {
  data () {
    return {}
  },
  components: { ContentItem }
}
</script>

<style lang="less" scoped>
.content-list {
  margin-top: 20px;
  background: #fff;
}
</style>