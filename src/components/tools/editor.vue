<template>
  <div class="editor_style">
    <Input placeholder="主题" v-model="topictitle"/>
    <vue-editor v-model="content"></vue-editor>
    <div style="height:20%;">
      <Button @click="emitsend">submit</Button>
      <Button @click="removesend">clear</Button>
    </div>
    
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { mapState } from "vuex";
import { addtopic } from "../../service/getData";
export default {
  name: "editor",
  components: {
    VueEditor
  },
  data() {
    return {
      content: "",
      topictitle: ""
    };
  },
  computed: {
    ...mapState(["onlyid"])
  },
  methods: {
    emitsend() {
      let senddata = {
        content: this.content,
        title: this.topictitle,
        author: this.onlyid
      };
      addtopic(senddata).then(data => {
        return data.json().then(res => {
          console.log(res);
        });
      });
    },
    removesend() {
      this.content = "";
      this.$emit("submitremove");
    }
  }
};
</script>

<style scoped>
.editor_style {
  margin: auto;
  display: grid;
  grid-gap: 1rem;
}
textarea {
  border: 1px solid rgba(49, 24, 31, 0.1);
}
</style>
