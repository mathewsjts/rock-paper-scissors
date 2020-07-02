<template>
  <div class="v-logo">
    <img
      :src="require('@/assets/img/logo.svg')"
      alt="Rock, Paper, Scissors"
      @click="toggleBonus"
      v-if="!bonus"
    />
    <img
      :src="require('@/assets/img/logo-bonus.svg')"
      alt="Rock, Paper, Scissors, Lizard, Spock"
      @click="toggleBonus"
      v-else
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

@Component({
  computed: {
    ...mapState(['bonus'])
  },
  methods: {
    ...mapActions(['toggleBonus'])
  }
})
export default class VLogo extends Vue {}
</script>

<style lang="scss" scoped>
.v-logo {
  flex-grow: 1;
  line-height: 0;

  img {
    cursor: pointer;
    max-width: mobile-vw(86px);
  }

  @include desktop {
    img {
      max-width: desktop-vw(156px);
    }
  }
}
</style>
