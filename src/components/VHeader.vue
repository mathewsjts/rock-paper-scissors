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
      VLogo: () => import('./common/VLogo.vue'),
      VScore: () => import('./common/VScore.vue')
    }
  })
  export default class VHeader extends Vue {}
</script>

<style lang="scss" scoped>
  .v-header {
    align-items: center;
    border: solid 2px #5d718a;
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    margin: 0 0 102px;
    padding: 9px;

    @media (min-width: 700px) {
      border-radius: 9px;
      margin: 0 0 62px;
      padding: 22px;
    }
  }
</style>
