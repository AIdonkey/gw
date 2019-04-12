<template>
    <div style="">
        <Card title="Options" icon="ios-options" :padding="0" shadow style="width: 100%;">
            <CellGroup>
                <Cell title="姓名" :extra="userinfo.name"/>
                <Cell title="个人发帖" />
                <!--<Cell title="Display right content" extra="details" />-->
                <!--<Cell title="Link" extra="details" to="/components/button" />-->
                <!--<Cell title="Open link in new window" to="/components/button" target="_blank" />-->
                <!--<Cell title="Disabled" disabled />-->
                <!--<Cell title="Selected" selected />-->
                <Cell title="With Badge" to="/components/badge">
                    <Badge :count="10" slot="extra" />
                </Cell>
                <Cell title="With Switch">
                    <Switch v-model="switchValue" slot="extra" />
                </Cell>
            </CellGroup>
        </Card>
    </div>
</template>

<script>
// import {ab} from './a'
import editor from '../../components/tools/editor.vue'
import { getuser } from '../../service/getData';
export default {
  name: 'personal',
  data () {
    return {
      switchValue: true,
      userid: 'test1',
      userinfo: {},
    }
  },
  components: {
    editor
  },
  mounted() {
    getuser(`loginid=${this.userid}`).then(response => response.json()).then(resource => {
      this.userinfo = resource
    })
  },
  methods: {
    hello () {
    }
  }
}
</script>

<style scoped>

</style>
