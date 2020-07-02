<template>
  <div class="v-selection" :class="{ 'bonus': bonus }">
    <v-button />
    <v-button />
    <v-button />
    <template v-if="bonus">
      <v-button />
      <v-button />
    </template>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { mapState } from "vuex";

  @Component({
    computed: {
      ...mapState(['bonus'])
    },

    components: {
      VButton: () => import("./VButton.vue")
    }
  })
  export default class VGame extends Vue {}
</script>
