<template>
  <div class="sidebar-logo-container">
    <sidebar-logo />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :router="router"
        :mode="mode"
        :collapse="isCollapse"
        :default-active="$route.path"
        :unique-opened="uniqueOpened"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :collapse-transition="collapseTransition"
      >
        <SidebarItem
          v-for="route in routes.data"
          :key="route.menuId"
          :index="route.menuId"
          :item="route"
          :isNest="sidebar"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import SidebarLogo from "./SidebarLogo.vue";
import SidebarItem from "./SidebarItem.vue";

@Component({
  name: "Sidebar",
  components: {
    SidebarLogo,
    SidebarItem,
  },
})
export default class extends Vue {
  @Prop({ default: false }) readonly sidebar!: boolean;

  private router: boolean = true;
  private mode: string = "vertical";
  private isCollapse: boolean = this.sidebar;
  private uniqueOpened: boolean = false;
  private backgroundColor: string = "#344058";
  private textColor: string = "#fff";
  private activeTextColor: string = "#1e9fff";
  private collapseTransition: boolean = false;

  @Watch("sidebar")
  getSidebar(newVal: boolean) {
    this.isCollapse = newVal;
  }

  private routes: object = {
    success: true,
    code: 1,
    msg: "操作成功！",
    data: [
      {
        menuId: "311137b4a209a4c901786f85e6e5ee0e",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "首页",
        pictureUrl: "fa fa-home",
        pageUrl: "/home",
        orderId: 1,
        isEnable: true,
        fullPath: null,
        children: [],
      },
      {
        menuId: "9573bb081f654a5dd8e192d3667e33e0",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "系统管理",
        pictureUrl: "fa fa-desktop",
        pageUrl: null,
        orderId: 2,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "ac74b99eb0cf97b06c26dd0a600b8431",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "9573bb081f654a5dd8e192d3667e33e0",
            menuName: "菜单管理",
            pictureUrl: "fa fa-navicon",
            pageUrl: "/menus",
            orderId: 1,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "d27c7b2c092ddf062986f8479c9959b8",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "9573bb081f654a5dd8e192d3667e33e0",
            menuName: "数据字典",
            pictureUrl: "fa fa-book",
            pageUrl: "/dictionary",
            orderId: 2,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "67bf015022bd53e095d1db725cbe844d",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "9573bb081f654a5dd8e192d3667e33e0",
            menuName: "日志管理",
            pictureUrl: "fa fa-bar-chart",
            pageUrl: "/log",
            orderId: 3,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "499baabd2e0b89492b7efe92e0e1f5bd",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "9573bb081f654a5dd8e192d3667e33e0",
            menuName: "插件管理",
            pictureUrl: "fa fa-download",
            pageUrl: "/pluginunit",
            orderId: 5,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "d7d0308fe4e4536e0c0168ff52572e3e",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "单位组织",
        pictureUrl: "fa fa-users",
        pageUrl: null,
        orderId: 3,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "3cdd8c97e09f6f61363193a41f242ca8",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "d7d0308fe4e4536e0c0168ff52572e3e",
            menuName: "单位管理",
            pictureUrl: "fa fa-gears",
            pageUrl: "/company",
            orderId: 1,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "70f8f90fae49321d3935a2f4d851d64e",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "d7d0308fe4e4536e0c0168ff52572e3e",
            menuName: "部门管理",
            pictureUrl: "fa fa-graduation-cap",
            pageUrl: "/department",
            orderId: 2,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "e155f149a5975a63b48bee48a25b258f",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "d7d0308fe4e4536e0c0168ff52572e3e",
            menuName: "人员管理",
            pictureUrl: "fa fa-user-o",
            pageUrl: "/personnel",
            orderId: 3,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "10535aa7ef359ed165ef741b3fc1c926",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "d7d0308fe4e4536e0c0168ff52572e3e",
            menuName: "角色管理",
            pictureUrl: "fa fa-user-md",
            pageUrl: "/role",
            orderId: 4,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "13d432962cd22a0ad083650661dd550a",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "项目环境管理",
        pictureUrl: "fa fa-book",
        pageUrl: null,
        orderId: 4,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "46780b795187830bbbcb9e9eecced7c5",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "13d432962cd22a0ad083650661dd550a",
            menuName: "环境变量",
            pictureUrl: null,
            pageUrl: "/environmentproject",
            orderId: 0,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "11fb1ac75658b4ae63b50e2e885e724c",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "13d432962cd22a0ad083650661dd550a",
            menuName: "工作空间模板",
            pictureUrl: null,
            pageUrl: "/environmenttemplate",
            orderId: 1,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "b8db14fc7cbbb3490f9a017e28759826",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "13d432962cd22a0ad083650661dd550a",
            menuName: "工作空间配置",
            pictureUrl: null,
            pageUrl: "/environmentmanage",
            orderId: 2,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "7de9d95fceb81aa8bbe224bc6aa87d3e",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "项目管理",
        pictureUrl: "fa fa-cube",
        pageUrl: null,
        orderId: 5,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "7b07321bf48d22db6e8499f1fe6c1206",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "7de9d95fceb81aa8bbe224bc6aa87d3e",
            menuName: "项目列表",
            pictureUrl: "fa fa-cube",
            pageUrl: "/project",
            orderId: 0,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "5875205c640b55ef723a085f62f363f1",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "目录管理",
        pictureUrl: "fa fa-folder",
        pageUrl: null,
        orderId: 6,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "a021a18b5e7c54e1abf249883f87a45b",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "5875205c640b55ef723a085f62f363f1",
            menuName: "目录列表",
            pictureUrl: "fa fa-th-list",
            pageUrl: "/folder",
            orderId: 0,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "6b0090d5d9bba5f1304f9bba8684f694",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "文档管理",
        pictureUrl: "fa fa-calendar-o",
        pageUrl: null,
        orderId: 7,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "24dac3f86d55620e9ca85b0194029d6e",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "6b0090d5d9bba5f1304f9bba8684f694",
            menuName: "文档列表",
            pictureUrl: "fa fa-book",
            pageUrl: "/document",
            orderId: 0,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
      {
        menuId: "0831e424a565feaa612770ea359bd24a",
        menuType: "WEB",
        menuCode: null,
        upMenuId: null,
        menuName: "族库管理",
        pictureUrl: "fa fa-suitcase",
        pageUrl: null,
        orderId: 8,
        isEnable: true,
        fullPath: null,
        children: [
          {
            menuId: "50eb44b94811c5147eda83506d96a8f1",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "0831e424a565feaa612770ea359bd24a",
            menuName: "族库管理",
            pictureUrl: "fa fa-cube",
            pageUrl: "/familyLibrary",
            orderId: 0,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "6b943203a42a60ca78d20f446ed50ab3",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "0831e424a565feaa612770ea359bd24a",
            menuName: "族目录",
            pictureUrl: "fa fa-folder-open-o",
            pageUrl: "/familyLibraryFolder",
            orderId: 1,
            isEnable: true,
            fullPath: null,
            children: [],
          },
          {
            menuId: "a568e8341968e8e2e8dbc175fd539d47",
            menuType: "WEB",
            menuCode: null,
            upMenuId: "0831e424a565feaa612770ea359bd24a",
            menuName: "族文件管理",
            pictureUrl: "fa fa-sign-language",
            pageUrl: "/familyLibraryDocument",
            orderId: 2,
            isEnable: true,
            fullPath: null,
            children: [],
          },
        ],
      },
    ],
  };
}
</script>

<style lang="stylus">
.sidebar-container {
  .horizontal-collapse-transition {
    transition: 0s width ease-in-out, 0s padding-left ease-in-out, 0s padding-right ease-in-out;
  }

  .scrollbar-wrapper {
    overflow-x: hidden !important;
  }

  .el-scrollbar__view {
    height: 100%;
  }

  .el-scrollbar__bar {
    &.is-vertical {
      right: 0px;
    }

    &.is-horizontal {
      display: none;
    }
  }
}

.el-menu {
  border-right: none !important;
  height: 100%;
  width: 100% !important;
}

.el-scrollbar {
  height: calc(100% - 50px);
  background: #344058;
  overflow-x: hidden;
}
</style>