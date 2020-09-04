<template>
  <transition name="sidebarLogoFade">
    <div class="sidebar-logo-container">
      <div class="sidebar-logo-link">
        <img class="sidebar-logo" src="../../../assets/logo.png" />
        <h1 class="sidebar-title" v-show="!sidebar">{{title}}</h1>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import settings from "@/settings";

@Component({
  name: "SidebarLogo",
})
export default class extends Vue {
  private title = settings.title;

  get sidebar() {
    return AppModule.sidebar.opened;
  }
}
</script>

<style lang="stylus" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter, .sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #344058;
  text-align: center;
  overflow: hidden;

  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
    }

    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      margin-left: 12px;
    }
  }
}
</style>