<template>
  <div class="login">
    <el-form class="form" :model="loginForm">
      <h3 class="title">若依管理系统</h3>
      <el-form-item>
        <el-input
          class="el-form-item"
          placeholder="账号"
          prefix-icon="el-icon-search"
          v-model="loginForm.username"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="el-form-item"
          placeholder="密码"
          prefix-icon="el-icon-search"
          v-model="loginForm.password"
        >
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          class="el-form-item"
          style="width: 63%"
          placeholder="验证码"
          prefix-icon="el-icon-search"
          v-model="loginForm.code"
        >
        </el-input>
        <div class="login-code">
          <img :src="codeUrl" class="login-code-imgs" />
        </div>
      </el-form-item>
      <el-checkbox
        style="margin: 0px 0px 25px 0px"
        v-model="loginForm.remenberMe"
        >记住密码</el-checkbox
      >
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="footer">
      Copyright © 2018-2023 ruoyi.vip All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
        remenberMe: true,
      },
      codeUrl: "",
    };
  },
  methods: {},
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