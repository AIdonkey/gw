<template>
    <div>
        <Input prefix="ios-contact" placeholder="搜索内容" style="width: auto"  v-model="searchwords"/>
        <div>
            {{content}}
            <audio src=""></audio>
            <input type="date">
        </div>
    </div>
</template>

<script>
import {getmusic} from '../service/getData'
export default {
  name: 'gwwd',
  data () {
    return {
      searchwords: '',
      content: {}
    }
  },
  created () {
    this.$nextTick()
  },
  watch: {
    searchwords () {
      let that = this;
      (async function () {
        let b = await getmusic(that.searchwords)
        console.log(b.text())
        that.content = b.ok
      })()
    }
  }
}
</script>

<style scoped>

</style>
