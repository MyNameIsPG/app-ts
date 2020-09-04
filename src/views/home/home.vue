<template>
  <from-base-tree>
    <template slot="leftSolt">123</template>
    <template slot="rightSolt">
      <from-base />
    </template>
  </from-base-tree>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import FromBaseTree from "@/components/FromBase/FromBaseTree.vue";
import FromBase from "@/components/FromBase/FromBase.vue";
@Component({
  name: "Home",
  components: {
    FromBaseTree,
    FromBase,
  },
})
export default class extends Vue {}
</script>

<style lang="stylus" scoped></style>