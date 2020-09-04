<template>
  <div class="app-wrapper">
    <sidebar :sidebar="sidebar" class="sidebar-container" :style="{width: mainMarginLeft }" />
    <div class="main-container" :style="{marginLeft: mainMarginLeft }">
      <navbar :sidebar="sidebar" />
      <app-main />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Sidebar, Navbar, AppMain } from "./components";
import { AppModule } from "@/store/modules/app";

@Component({
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
})
export default class extends Vue {
  get sidebar() {
    return AppModule.sidebar.opened;
  }
  get mainMarginLeft() {
    return this.sidebar ? "62px" : "220px";
  }
}
</script>

<style lang="stylus" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.main-container {
  min-height: 100%;
  transition: margin-left 0.28s;
  margin-left: 220px;
  position: relative;
}

.sidebar-container {
  transition: width 0.28s;
  width: 220px;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.hideSidebar {
  .main-container {
    margin-left: 54px;
  }

  .sidebar-container {
    width: 54px !important;
  }

  .fixed-header {
    width: calc(100% - 54px);
  }
}

/* for mobile response 适配移动端 */
.mobile {
  .main-container {
    margin-left: 0px;
  }

  .sidebar-container {
    transition: transform 0.28s;
    width: 220px !important;
  }

  &.openSidebar {
    position: fixed;
    top: 0;
  }

  &.hideSidebar {
    .sidebar-container {
      pointer-events: none;
      transition-duration: 0.3s;
      transform: translate3d(-220px, 0, 0);
    }
  }

  .fixed-header {
    width: 100%;
  }
}

.withoutAnimation {
  .main-container, .sidebar-container {
    transition: none;
  }
}
</style>