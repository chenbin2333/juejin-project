<template>
  <div class="content-list ban-xin">
    <ContentItem
      v-for="(item, index) in contentList"
      :listItem="item"
      :key="index"
    >
    </ContentItem>
  </div>
</template>

<script>
import ContentItem from './ContentItem.vue'

export default {
  data () {
    return {}
  },
  props: {
    contentList: {
      type: Array,
      default: () => []
    }
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