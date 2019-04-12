<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@lesswidth: 80vw;
@textposition: left;
.ivu-cell-item{
  max-width: @lesswidth !important;
  text-align: @textposition !important;
}
</style>
