<template>
  <div class="hello" v-show="showpicture">
    <div style="height: 5000px" id="test">
      <input type="file" style="display: none" class="inputclick" @change="uploadavatar1">
      <!--&lt;!&ndash;<div v-show="avatardata === '' && avatardata2 === ''">&ndash;&gt;-->
      <Avatar
        icon="ios-person"
        size="large"
        id="iconavatar"
        @click.native="uploadavatar"
        :src="avatardata"
      />
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!-- <img :src="avatardata" alt="" v-show="avatardata" width="30" height="30" @click="uploadavatar">
      <img :src="avatardata2" alt="" v-show="avatardata2" width="30" height="30" @click="uploadavatar">-->
      <Input
        v-model="username"
        placeholder="shui shi ai qing gao shou"
        style="width: 98vw;margin-top: 1vw;"
        @on-blur="checkavatar"
      ></Input>
      <Input
        v-model="password"
        placeholder="Enter something..."
        style="width: 98vw;margin-top: 1vw; "
        type="password"
      ></Input>
      <Input v-model="email" placeholder="邮箱" style="width: 98vw;margin-top: 1vw; "></Input>
      <Button @click.native="login">log</Button>
      <Button @click.native="toregister">reg</Button>
    </div>
    <!--<img v-img:group src="../assets/123.jpg" width="200px" alt="">-->
    <!--<img v-img:group src="../assets/11.jpg" width="200px" alt="">-->
    <!--<img v-img:group src="../assets/12.jpg" width="200px" alt="">-->
    <!--<img v-img:group src="../assets/13.jpg" width="200px" alt="">-->
  </div>
</template>

<script>
import { Input, Button } from "iview";
import { register } from "../service/getData";
import { mapMutations } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      showpicture: true,
      value: "",
      username: "",
      password: "",
      email: "",
      avatardata: "",
      avatardata2: localStorage.avatardata
    };
  },
  components: {
    Input,
    Button
  },
  watch: {
    username() {
      this.$socket.emit("event01", this.username);
    }
  },
  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    anevent: data => {
      localStorage.avatardata = data;
    }
  },
  mounted() {
    console.log(document.cookie)
  },
  methods: {
    uploadavatar() {
      document.getElementsByClassName("inputclick")[0].click();
    },
    checkavatar() {
      this.$http
        .get(`/apx/login/search?loginname=${this.username}`)
        .then(res => {
          this.avatardata = res.data;
          localStorage.setItem("avatardata", res.data);
        });
    },
    emailcheck() {
      let emailcheck = /^([A-Za-z0-9_\-\.\u4e0 0-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
      if (!emailcheck.test(this.email)) {
        this.$Message.warning({
          content: "请输入正确的邮箱",
          top: 50,
          duration: 3
        });
        return false;
      }
      return true;
    },
    uploadavatar1() {
      let avatardata = document.getElementsByClassName("inputclick")[0]
        .files[0];
      let reader = new FileReader();
      reader.readAsDataURL(avatardata);
      let that = this;
      reader.onload = function(ev) {
        that.avatardata = this.result;
      };
      console.log(document.getElementsByClassName("inputclick")[0].files);
    },
    login() {
      let name = this.username;
      let password = this.password;
      let allfile = { loginname: name, pass: password };
      this.$http.post("apx/login", allfile).then(res => {
        console.log(res);
        if (res.data === "hello") {
          this.$router.push("index");
          let idname = document.cookie.slice(
            document.cookie.indexOf("username=") + 9,
            document.cookie.indexOf("username=") + 33
          );
          this.ONLYID(idname);
          this.USERNAME(name);
        } else {
          this.$Message.warning({
            content: "密码或用户名错误",
            top: 50,
            duration: 3
          });
        }
      });
    },
    toregister() {
      // if (!this.emailcheck()) {
      //   return
      // }
      let params1 = JSON.stringify({
        loginname: this.username,
        pass: this.password,
        email: this.email,
        avatardata: this.avatardata
      });
      let params = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: params1
      };
      // console.log(this.USERNAME('1234'))
      // this.USERNAME(this.username)
      register(params);
    },
    ...mapMutations(["USERNAME", "ONLYID"])
  }
};
</script>

<style scoped>
/*@import "../../test1.css";*/
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
