<template>
  <div class="v-logo">
    <img
      :src="require('@/assets/img/logo.svg')"
      alt="Rock, Paper, Scissors"
      v-if="!bonus"
    />
    <img
      :src="require('@/assets/img/logo-bonus.svg')"
      alt="Rock, Paper, Scissors, Lizard, Spock"
      v-else
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  computed: {
    ...mapState(['bonus'])
  }
})
export default class VLogo extends Vue {}
</script>

<style lang="scss" scoped>
.v-logo {
  flex-grow: 1;
  line-height: 0;

  img {
    max-width: mobile-vw(86px);
  }

  @include desktop {
    img {
      max-width: desktop-vw(156px);
    }
  }
}
</style>
