<template>
    <div>
        <Editor @submit="submittopic"></Editor>
    </div>
</template>

<script>
import Editor from '../tools/editor'

export default {
  components: {Editor},
  name: 'addtopic',
  data () {
    return {
      content: ''
    }
  },
  methods: {
    submittopic (senddata) {

    }
  }
}
</script>

<style scoped>

</style>
