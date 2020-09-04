<template>
  <div id="particlesDom">
    <div class="main">
      <div class="main-header">
        <h2>{{title}}</h2>
      </div>
      <div class="main-content">
        <el-form
          :model="ruleForm2"
          status-icon
          :rules="rules2"
          ref="ruleForm2"
          class="demo-ruleForm"
        >
          <el-form-item prop="userAccount">
            <el-input
              type="text"
              placeholder="请输入用戶名"
              prefix-icon="fa fa-user-o"
              v-model="ruleForm2.userAccount"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              type="password"
              placeholder="请输入密码"
              prefix-icon="fa fa-key"
              v-model="ruleForm2.password"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              style="width: 100%; margin-top: 10px;"
              type="primary"
              @click="submitForm"
              @keyup.enter.native="submitForm"
              :disabled="disabledBtn"
              :loading="isLoading"
            >登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Form as ElForm } from "element-ui";
import settings from "@/settings";
import { particles } from "./particles";
import { apiAuthUserlogin } from "@/api/index";
import { IS_OK } from "@/api/path";

@Component({
  name: "Login",
})
export default class extends Vue {
  created() {
    localStorage.clear();
  }
  mounted() {
    particlesJS("particlesDom", particles);
    document.addEventListener("keydown", this.handleEnter);
  }
  destroyed() {
    document.removeEventListener("keydown", this.handleEnter);
  }
  private title: string = settings.title;
  private isLoading: boolean = false;
  private disabledBtn: boolean = false;
  private ruleForm2: any = {
    userAccount: "",
    password: "",
  };
  private rules2: object = {
    userAccount: [{ required: true, message: "请输入用戶名", trigger: "blur" }],
    password: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };
  private submitForm() {
    (this.$refs.ruleForm2 as ElForm).validate(async (valid: boolean) => {
      if (valid) {
        this.isLoading = true;
        this.disabledBtn = true;
        let loading = this.$loading({
          lock: true,
          text: "正在登陆系统中，请等候。",
          spinner: "el-icon-loading",
          background: "rgba(0, 0, 0, 0.7)",
        });
        const res: any = await apiAuthUserlogin(this.ruleForm2);
        if (res.data.code === IS_OK) {
          localStorage.setItem("uid", res.data.data.uid);
          localStorage.setItem("userId", res.data.data.userId);
          localStorage.setItem("language", "zh_CN");
          setTimeout(() => {
            this.isLoading = false;
            this.disabledBtn = false;
            loading.close();
            this.$router.push({ path: "/home" });
          }, 1000);
        } else {
          setTimeout(() => {
            this.isLoading = false;
            this.disabledBtn = false;
            loading.close();
          }, 500);
        }
      }
    });
  }
  private handleEnter(e: any) {
    if (e.key === "Enter" && e.target.getAttribute("type") === "password") {
      e.preventDefault();
      this.submitForm();
    }
  }
}
</script>

<style lang="stylus" scoped>
#particlesDom {
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/login/bg.jpg');
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
  background-size: 100%;

  .main {
    width: 420px;
    border-radius: 10px;
    min-width: 300px;
    margin: 0 auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    z-index: 2;
    position: absolute;
    left: 50%;
    top: 40%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    background: #fff;
    padding: 20px;

    .main-header {
      text-align: center;
      margin-top: 10px;

      h2 {
        font-size: 26px;
        color: #3b3d3f;
        font-weight: bold;
      }
    }

    .main-content {
      margin-top: 30px;
      padding: 0 20px;
    }
  }
}
</style>
