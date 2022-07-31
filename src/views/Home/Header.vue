<template>
  <div class="main-header-box">
    <header :class="{'main-header':true,'visible':isVisible}">
      <div class="container">
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {}
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
  background-color: red;
  margin: auto;
  width: 1440px;
  height: 100%;
}
</style>