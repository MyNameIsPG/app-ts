<template>
  <el-dropdown class="langselect-container" trigger="click" @command="handleSetLanguage">
    <div class="langselect-text">
      {{currentLang}}
      <i class="el-icon-arrow-down el-icon--right"></i>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="(item,index) in langList" :key="index" :command="item.key">
        <div class="center">{{item.value}}</div>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "LangSelect",
})
export default class extends Vue {
  private currentLang = "中文";
  private langList = [
    { key: "zh_CN", value: "中文" },
    { key: "en_US", value: "English" },
    { key: "es", value: "Español" },
  ];

  private handleSetLanguage(lang: string) {
    this.langList.map((item) => {
      if (item.key == lang) {
        this.currentLang = item.value;
      }
    });
    this.$i18n.locale = lang;
    window.localStorage.setItem("language", lang);
    this.$message({
      message: "语言切换成功",
      type: "success",
    });
  }
}
</script>

<style lang="stylus" scoped>
.langselect-container {
  height: 100%;
  padding: 0 10px;
  float: left;

  .langselect-text {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    outline: none;
    cursor: pointer;
  }
}
</style>