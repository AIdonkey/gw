<template>
    <div>
        <Input v-model="chatdata"/>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
export default {
  name: 'chatroom',
  data () {
    return {
      chatdata: ''
    }
  },
  computed: {
    ...mapState
  },
  created () {
    this.$socket.emit('event01', function (data) {
      console.log(data)
    })
  },
  sockets: {
    connect: function () {
      console.log('socket connected')
    }
  },
  methods: {
    ...mapMutations(['USERNAME'])
  }
}
</script>

<style scoped>

</style>
