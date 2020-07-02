<template>
  <section class="v-game">
    <v-selection v-if="playing" />
    <v-result v-else />
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
