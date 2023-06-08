<template>
  <div>
    <side-bar class="sidebar-container"></side-bar>
    <div>
      <div>
        <nav-bar></nav-bar>
        <tags-view></tags-view>
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar/index.vue";
import TagsView from "./components/TagsView/index.vue";
import NavBar from "./components/NavBar.vue";
import AppMain from "./components/AppMain.vue";

export default {
  name: "Layout",
  components: { SideBar, NavBar, TagsView, AppMain },
  mounted() {
    console.log("layout", this.$store.state.user.token);
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.module.scss";
.sidebar-container {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: $base-menu-background;
  color: #fff;
  //   overflow: auto;
}
</style>