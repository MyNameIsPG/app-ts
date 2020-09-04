<template>
  <div>
    <el-submenu v-if="item.children && item.children.length > 0" :index="item.menuId">
      <template slot="title">
        <i :class="item.pictureUrl"></i>
        <span v-show="!isNest">{{ item.menuName }}</span>
      </template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.pageUrl"
        :item="child"
        :isNest="isNest"
      ></sidebar-item>
    </el-submenu>
    <el-menu-item v-else :index="item.pageUrl" :key="item.menuId">
      <i :class="item.pictureUrl"></i>
      <span slot="title">{{ item.menuName }}</span>
    </el-menu-item>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  name: "SidebarItem",
})
export default class extends Vue {
  @Prop() readonly item!: object;
  @Prop({ default: false }) readonly isNest!: Boolean;
}
</script>