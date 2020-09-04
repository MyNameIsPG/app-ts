<template>
  <div class="box">
    <div class="left">
      <div class="left-title">目录分类</div>
      <div class="left-body">
        <slot name="leftSolt">112312123</slot>
      </div>
    </div>
    <div class="y-hander"></div>
    <div class="right">
      <div class="app-main-wrapper">
        <slot name="rightSolt">112312123</slot>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import MixinResize from "./mixin/mixinResize";
@Component({
  name: "FromBaseTree",
})
export default class extends mixins(MixinResize) {}
</script>

<style lang="stylus" scoped>
.box {
  display: flex;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;

  .left {
    width: 260px;
    background: #fff;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);
    border: 1px solid #eee;

    .left-title {
      border-bottom: 1px solid #eee;
      line-height: 36px;
      padding: 0 10px;
      box-sizing: border-box;
      font-size: 14px;
      color: #333;
    }

    .left-body {
      height: calc(100% - 36px);
      padding: 10px;
      box-sizing: border-box;
      overflow: auto;
    }
  }

  .y-hander {
    width: 10px;
    cursor: w-resize;
    background: #fff;
  }

  .right {
    flex: 1;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);

    .app-main-wrapper {
      width: 100%;
      height: 100%;
    }
  }
}
</style>