<template>
  <div class="fixed-header" :style="{left: fixedHeaderLeft}">
    <div class="header-nav-flex">
      <div class="navbar">
        <div class="hamburger-container" @click="toggleSideBar">
          <span>
            <i :class="!sidebar ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
          </span>
        </div>
      </div>
      <div class="right-nav-bar">
        <div style="display: inline-block; height: 100%;float: left;">
          <div style="height: 100%;display: flex;align-items: center;justify-content: center;">
            <el-input v-model="inputModel" placeholder="请输入检索条件" size="mini">
              <i class="el-icon-search el-input__icon" slot="suffix"></i>
            </el-input>
          </div>
        </div>
        <lang-select />
        <el-dropdown class="username-container" trigger="click">
          <div class="username-text">
            <template v-if="userphotoUrl !== '' && userphotoUrl !== null">
              <img class="userImg" :src="userphotoUrl" />
            </template>
            <template v-else>
              <img class="userImg" src="../../../assets/userImg.png" />
            </template>
            <span style="cursor: pointer">{{ loginusername }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <div class="center">{{ $t('navbar.profile') }}</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">{{ $t('navbar.password') }}</div>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="center">{{ $t('navbar.logOut') }}</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import LangSelect from "@/components/LangSelect/index.vue";

@Component({
  name: "Navbar",
  components: {
    LangSelect,
  },
})
export default class extends Vue {
  @Prop({ default: false }) readonly sidebar!: boolean;

  private inputModel = "";
  private userphotoUrl = "";
  private loginusername = "超级管理员";

  get fixedHeaderLeft() {
    return this.sidebar ? "62px" : "220px";
  }

  private toggleSideBar() {
    AppModule.ToggleSideBar();
  }
}
</script>

<style lang="stylus" scoped>
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0px;
  z-index: 9;
  -webkit-transition: left 0.28s;
  transition: left 0.28s;

  .header-nav-flex {
    position: relative;
    height: 50px;
    background: #344058;

    .navbar {
      height: 100%;
      overflow: hidden;
      position: relative;
      -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

      .hamburger-container {
        line-height: 46px;
        height: 100%;
        float: left;
        cursor: pointer;
        -webkit-transition: background 0.3s;
        transition: background 0.3s;
        -webkit-tap-highlight-color: transparent;
        padding: 0px 15px;
        font-size: 16px;
        color: #ffffff;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }

        span {
          display: inline-block;
          background: #409eff;
          height: 30px;
          line-height: 30px;
          width: 30px;
          text-align: center;
        }
      }

      .breadcrumb-container {
        float: left;
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 8px;
      }
    }

    .right-nav-bar {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 100%;

      .username-container {
        height: 100%;
        float: left;
        padding: 0 10px;

        .username-text {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          color: #fff;
          outline: none;

          .userImg {
            width: 26px;
            height: 26px;
            margin-right: 5px;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
</style>