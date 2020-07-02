<template>
  <div class="v-selection" :class="{ 'bonus': bonus }">
    <template v-if="!bonus">
      <v-button button-type="paper" />
      <v-button button-type="scissors" />
      <v-button button-type="rock" />
    </template>
    <template v-else>
      <v-button button-type="scissors" />
      <v-button button-type="spock" />
      <v-button button-type="paper" />
      <v-button button-type="lizard" />
      <v-button button-type="rock" />
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

<style lang="scss" scoped>
  .v-selection {
    display: grid;
    background-position: center;
    background-repeat: no-repeat;

    &:not(.bonus) {
      background-image: url("../../assets/img/bg-triangle.svg");
      background-size: 60%;
      grid-gap: mobile-vw(12px);
      grid-template-areas:
        "paper scissors"
        "rock rock"
      ;

      .v-button:nth-child(1) {
        grid-area: paper;
        text-align: left;
      }
      .v-button:nth-child(2) {
        grid-area: scissors;
        text-align: right;
      }
      .v-button:nth-child(3) {
        grid-area: rock;
        text-align: center;
      }
    }

    &.bonus {
      background-image: url("../../assets/img/bg-pentagon.svg");
      background-size: 70%;
      grid-gap: mobile-vw(26px);
      grid-template-areas:
        "scissors scissors"
        "spock paper"
        "lizard rock"
      ;

      .v-button:nth-child(1) {
        grid-area: scissors;
        margin-bottom: mobile-vw(-26px);
        text-align: center;
      }
      .v-button:nth-child(2) {
        grid-area: spock;
        text-align: left;
      }
      .v-button:nth-child(3) {
        grid-area: paper;
        text-align: right;
      }
      .v-button:nth-child(4) {
        grid-area: lizard;
        text-align: right;
      }
      .v-button:nth-child(5) {
        grid-area: rock;
        text-align: left;
      }
    }

    @include desktop {
      margin: 0 auto;
      max-width: desktop-vw(480px);

      &:not(.bonus) {
        grid-gap: desktop-vw(26px);
      }

      &.bonus {
        grid-gap: desktop-vw(36px);

        .v-button:nth-child(1) {
          margin-bottom: desktop-vw(-72px);
        }
      }
    }
  }
</style>
