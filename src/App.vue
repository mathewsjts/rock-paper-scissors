<template>
  <div id="app">
    <v-header />
    <v-game />
    <v-rules />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    VHeader: () => import("@/components/VHeader.vue"),
    VGame: () => import("@/components/VGame.vue"),
    VRules: () => import("@/components/VRules.vue")
  }
})
export default class App extends Vue {}
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
  padding: 30px;

  @media (min-width: 700px) {
    padding: 46px 0;
    max-width: 700px;
  }
}
</style>
