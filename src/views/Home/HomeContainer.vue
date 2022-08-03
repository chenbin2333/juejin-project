<template>
  <div class="container">
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
}
</script>

<style scoped>
.container {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 960px;
}
</style>
