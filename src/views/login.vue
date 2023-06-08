<template>
  <div class="login">
    <el-form
      class="form"
      :model="loginForm"
      :rules="loginFormRules"
      ref="loginForm"
    >
      <h3 class="title">若依管理系统</h3>
      <el-form-item prop="username">
        <el-input
          class="el-form-item"
          placeholder="账号"
          prefix-icon="el-icon-user"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          type="password"
          class="el-form-item"
          placeholder="密码"
          prefix-icon="el-icon-lock"
          v-model="loginForm.password"
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input
          class="el-form-item"
          style="width: 63%"
          placeholder="验证码"
          prefix-icon="el-icon-loading"
          v-model="loginForm.code"
        >
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" class="login-code-imgs" @click="getCode" />
        </div>
      </el-form-item>
      <el-checkbox
        style="margin: 0px 0px 25px 0px"
        v-model="loginForm.remenberMe"
        >记住密码</el-checkbox
      >
      <el-form-item style="width: 100%">
        <el-button
          type="primary"
          style="width: 100%"
          @click.native="handleLogin"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
    <div class="footer">
      Copyright © 2018-2023 ruoyi.vip All Rights Reserved.
    </div>
  </div>
</template>

<script>
import { getCodeImgs, getInfo } from "@/api/login";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "admin123",
        code: "",
        uuid: "",
        remenberMe: true,
      },
      codeUrl: "",
      captchaEnabled: true,
      redirect: undefined,
      loginFormRules: {
        username: [
          { required: true, message: "请输入账号", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    getCode() {
      getCodeImgs().then((res) => {
        this.captchaEnabled =
          res.captchaEnabled === undefined ? true : res.captchaEnabled;
        if (this.captchaEnabled) {
          this.codeUrl = "data:image/png;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
        console.log(res);
      });
    },
    handleLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$store
            .dispatch("Login", this.loginForm)
            .then((res) => {
              console.log(res);
              this.$router.push({ path: this.redirect || "/" });
            })
            .catch((err) => {
              if (this.captchaEnabled) {
                this.getCode();
              }
            });
        }
      });
    },
  },
  created() {
    this.getCode();
  },
};
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url(../assets/login-background.jpg);
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  width: 400px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 6px;
  font-size: 18px;
  padding: 25px 25px 5px 25px;
  .title {
    margin: 0 auto 30px auto;
    text-align: center;
    color: #707070;
  }
  .login-code {
    width: 30%;
    float: right;
    img {
      cursor: pointer;
      height: 38px;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: white;
  font-size: 12px;
}
</style>