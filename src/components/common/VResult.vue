<template>
  <section class="v-result">
    <div class="v-result__user">
      <v-button
        class="bonus"
        :button-type="choices.user.name"
        :no-click="true"
        :class="{ winner: status === 'win' }"
      />
      <span>You picked</span>
    </div>
    <div class="v-result__house">
      <v-button
        class="bonus"
        :button-type="choices.house ? choices.house.name : 'no-type'"
        :no-click="true"
        :class="{ winner: status === 'lose' }"
      />
      <span>The house picked</span>
    </div>
    <div class="v-result__status" v-if="choices.house">
      <span v-if="status === 'win'">You win!</span>
      <span v-else-if="status === 'lose'">You lose!</span>
      <span v-else>Draw!</span>
      <button @click="playAgain">Play again</button>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {mapActions, mapState} from "vuex";

@Component({
  computed: {
    ...mapState(['choices', 'status'])
  },

  components: {
    VButton: () => import('./VButton.vue')
  },

  methods: {
    ...mapActions(['playAgain'])
  }
})
export default class VResult extends Vue {}
</script>

<style lang="scss" scoped>
  .v-result {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    &__user,
    &__house {
      flex-basis: 50%;
      text-align: center;

      .v-button {
        margin: 0 auto mobile-vw(18px);
      }

      span {
        color: #ffffff;
        font-size: mobile-vw(12px);
        text-transform: uppercase;
      }
    }

    &__status {
      flex-basis: 100%;
      padding: mobile-vw(40px) 0 0;
      text-align: center;

      span {
        color: #ffffff;
        display: block;
        font-size: mobile-vw(38px);
        margin: 0 auto mobile-vw(26px);
        text-transform: uppercase;
      }

      button {
        border: none;
        border-radius: mobile-vw(9px);
        color: $dark-text;
        cursor: pointer;
        height: mobile-vw(48px);
        font-size: mobile-vw(14px);
        letter-spacing: mobile-vw(1px);
        text-transform: uppercase;
        width: mobile-vw(222px);

        &:hover {
          background: transparent;
          border: 2px solid $header-outline;
          color: #ffffff;
        }
      }
    }

    @include desktop {
      &__user,
      &__house {

        .v-button {
          margin: 0 auto desktop-vw(18px);
        }

        span {
          font-size: desktop-vw(12px);
        }
      }

      &__status {
        padding: desktop-vw(40px) 0 0;

        span {
          font-size: desktop-vw(38px);
          margin: 0 auto desktop-vw(26px);
        }

        button {
          border-radius: desktop-vw(9px);
          height: desktop-vw(48px);
          font-size: desktop-vw(14px);
          letter-spacing: desktop-vw(1px);
          width: desktop-vw(222px);
        }
      }
    }
  }
</style>
