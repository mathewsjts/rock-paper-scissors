<template>
  <section class="v-game">
    <transition mode="out-in" name="scale">
      <v-selection v-if="playing" />
      <v-result v-else />
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(['playing'])
  },

  components: {
    VSelection: () => import("./common/VSelection.vue"),
    VResult: () => import("./common/VResult.vue")
  }
})
export default class VGame extends Vue {}
</script>

<style lang="scss">
  .scale-enter-active,
  .scale-leave-active {
    transition: all .25s;
  }

  .scale-enter,
  .scale-leave-to {
    transform: scale(0);
  }
</style>
