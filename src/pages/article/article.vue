<template>
  <div style="overflow: hidden;">
    <keep-alive>
      <div v-html="content" style="text-align: left;" class="topiccontainer"></div>
    </keep-alive>
    <!-- <Editor @submit="submittopic" @removesend="removetopic" v-show="review"></Editor> -->
    <div class="replycontainer">
        <div v-for="item in reply" :key="item._id">
          <Cell>{{item._id}}</Cell>
        </div>
    </div>
    <div class="reviewcontainer">
      <Input placeholder="review" icon="ios-send-outline" v-model="content4" @on-click="addreview"></Input>
    </div>
    <!-- <div v-html="content" class="">
        
    </div>-->
  </div>
</template>

<script>
import Editor from '../../components/tools/editor'
import  reviewarticle  from "../../components/review/review"
import { addReply, gettopicById, getReply } from '../../service/getData';
import { mapState } from 'vuex';
export default {
  components: {Editor, reviewarticle},
  name: 'article',
  data () {
    return {
      topicid: this.$route.params.id,
      review: false,
      reply: [],
      authorid: '',
      content4: '',
      content: '',
    }
  },
  created () {
    gettopicById(JSON.stringify({topicid: this.topicid})).then(value => value.json()).then(response => {
      this.content = response.content
      this.authorid = response.author_id
    })
    getReply(JSON.stringify({topicid: this.topicid})).then(value => value.json()).then(response => {
      this.reply = response
    })
  },
  computed: {
    ...mapState(['onlyid',"username"])
  },
  mounted () {
    console.log(this.$route)
    // document.getElementById('testcontent').innerHTML = this.content3
    // let imgload = document.querySelectorAll('img')
    // imgload.forEach(function (val, index) {
    //   imgload[index].src = imgload[index].getAttribute('data-src')
    // })
    // this.review = true
  },
  methods: {
    submitmes () {
      
    },
    removemes () {

    },
    addreview () {
      console.log(this.username)
      let params = {
        author_id: this.authorid,
        reply_id: this.onlyid,
        topic_id: this.topicid,
        content: this.content4,
      }
      addReply(JSON.stringify(params)).then(value => value.json()).then(response => {
         console.log(response)
      })
    }
  }
}
</script>

<style scoped>
img {
  width: 100%;
}
.topiccontainer {
  width: 100vw;
  overflow: auto;
  font-size: 14px;
}
.topiccontainer pre {
  white-space: normal;
  overflow: auto;
}
.htmledit_views pre code {
  display: block;
  font-size: 14px;
  line-height: 22px;
  overflow-x: auto;
  white-space: pre;
  word-wrap: normal;
  border-radius: 4px;
  padding: 8px;
}
.htmledit_views p {
  font-size: 16px;
  color: #4f4f4f;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 16px;
  overflow-x: auto;
}
</style>
