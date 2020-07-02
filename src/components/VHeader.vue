<template>
  <header class="v-header">
    <v-logo />
    <v-score />
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VLogo: () => import("./common/VLogo.vue"),
    VScore: () => import("./common/VScore.vue")
  }
})
export default class VHeader extends Vue {}
</script>

<style lang="scss" scoped>
.v-header {
  align-items: center;
  border: solid 2px $header-outline;
  border-radius: mobile-vw(9px);
  display: flex;
  justify-content: space-between;
  margin: 0 0 mobile-vw(62px);
  padding: mobile-vw(9px);

  @include desktop {
    border-radius: desktop-vw(9px);
    margin: 0 0 desktop-vw(62px);
    padding: desktop-vw(22px);
  }
}
</style>
