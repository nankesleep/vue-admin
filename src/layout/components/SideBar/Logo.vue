<template>
  <div class="logo">
    <router-link to="/">
      <img :src="logo" alt="logo" />
      <h3>{{ title }}</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Logo",
  data() {
    return {
      logo: require("@/assets/logo.png"),
      title: "后台管理系统",
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  overflow: hidden;

  img {
    height: 15px;
    width: 15px;
    margin-right: 10px;
  }
  h3 {
    color: #fff;
    font-size: 15px;
    margin: 0;
    line-height: 15px;
    display: inline-block;
    height: 60px;
  }
}
</style>