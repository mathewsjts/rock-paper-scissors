<template>
  <div class="v-logo">
    <img :src="logoImg" :alt="logoAlt" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class VLogo extends Vue {
    private type: boolean = 2 > 1;

    get logoImg(): string {
      return this.type ? require('@/assets/img/logo.svg') : require('@/assets/img/logo-bonus.svg')
    }

    get logoAlt(): string {
      return this.type ? 'Rock, Paper, Scissors' : 'Rock, Paper, Scissors, Lizard, Spock'
    }
  }
</script>

<style lang="scss" scoped>
  .v-logo {
    flex-grow: 1;
    line-height: 0;

    img {
      max-width: 86px;
    }

    @media (min-width: 700px) {
      img {
        max-width: none;
      }
    }
  }
</style>
