<template>
  <aside class="main-content-right">
    <div class="sidebar-block" :class="{'sticky-block':advertisement}">
    </div>
  </aside>
</template>

<script>
export default {
  name: "MainContentRight",
  data() {
    return {
    }
  },
  computed: {
    advertisement() {
      return this.$store.state.advertisement
    }
  }
}
</script>
<style scoped>
.main-content-right {
  width: 20rem;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  background-color: yellow;
  height: 1440px;
}

.sidebar-block {
  position: fixed;
  background-color: green;
  box-shadow: none;
  opacity: 0;
  transition: all .2s;
  width: 20rem;
  height: 540px;
  z-index: -1;
  top: 67px;
  pointer-events: none;
}

.sticky-block {
  opacity: 1;
  z-index: 5;
  pointer-events: all;
}
</style>