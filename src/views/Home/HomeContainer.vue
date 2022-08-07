<template>
  <div :class="{'container':isContainer,'view-container':!isContainer}">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "../../components/Header";
import MainContent from "./MainContent";

export default {
  name: "container",
  components: {
    Header,
    MainContent
  },
  computed:{
    isContainer(){
      return this.$store.state.isContainer
    }
  }
}
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
.view-container{
  width:100%;
}
</style>
