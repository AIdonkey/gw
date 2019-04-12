<template>
    <div>
        <div style="display: flex;justify-content: center;flex-direction: row;" class="searchstyle">
            <Avatar :src="avatardata" @click.native="persondetail"/>
            <Icon type="ios-add" size="30" @click.native="drawerval=true"/>
            <Input icon="ios-search" placeholder="搜索" class="ivu-input-1" v-model="value1" style="width: 80%"/>
        </div>
        <Tabs value="name1">
            <TabPane label="全部" name="name1">
                <CellGroup>
                    <Cell :to="{name: 'article', params: {id: item._id}}" v-for="item in spider" :key="item._id" style="white-space: normal">
                        <span>{{item.title}}</span>
                    </Cell>
                </CellGroup>
            </TabPane>
            <TabPane label="精彩" name="name2">
              
            </TabPane>
            <TabPane label="分享" name="name3"></TabPane>
            <TabPane label="问答" name="name4"></TabPane>
            <TabPane label="dav" name="name5">
              <CellGroup>
                    <Cell :to="{name: 'article', params: {id: item._id}}" v-for="item in dav" :key="item._id" style="white-space: normal">
                        <Avatar :src="item.author_id.avatardata" />
                        <span>{{item.title}}</span>
                    </Cell>
                    <Page :total="100" />
                </CellGroup>  
            </TabPane>
        </Tabs>
        <Drawer title="Basic Drawer" :closable="true" v-model="drawerval" width="100%">
            <editor></editor>
        </Drawer>
        <!--<Editor @submit="submittopic" @removesend="removetopic"></Editor>-->
    </div>
</template>

<script>
import {gw, news, gettopic} from '../service/getData'
import {Icon} from 'iview'
import Editor from '../components/tools/editor'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      value1: '',
      avatardata: localStorage.avatardata,
      content: {},
      spider: [],
      drawerval: false,
      dav: []
    }
  },
  components: {
    Editor,
    Icon
  },
  computed: {
    ...mapState(['username'])
  },
  created () {
    gw().then(response => {
      response.json().then(data => {
        console.log(data)
      })
    })
    news().then(response => {
      response.json().then(data => {
        this.spider = data
      })
    })
    gettopic(JSON.stringify({author_id: this.username})).then(response => {
      response.json().then(data => {
        console.log(data)
        this.dav = data
      })
    })
  },
  methods: {
    persondetail () {},
    submittopic (data) {
      this.content = data
    },
    addtopic () {

    },
    ...mapMutations(['USERNAME'])
  }
}
</script>

<style scoped>
.searchstyle{
    margin-top: 8px;
    display: flex;
    justify-content: center;
    flex-direction: row;
}
.avatar {
    display: none;
}
</style>
