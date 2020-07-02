<template>
  <div class="v-rules">
    <button class="v-rules__activator" @click="toggleBackdrop">
      Rules
    </button>
    <transition name="fade">
      <div class="v-rules__backdrop" v-if="backdropActive">
        <div class="v-rules__backdrop__content">
          <div class="v-rules__backdrop__title">
            Rules
          </div>
          <img
            :src="require('@/assets/img/image-rules.svg')"
            alt="Rock, Paper, Scissors Rules"
            class="v-rules__backdrop__image"
            v-if="!bonus"
          />
          <img
            :src="require('@/assets/img/image-rules-bonus.svg')"
            alt="Rock, Paper, Scissors, Lizard, Spock Rules"
            class="v-rules__backdrop__image"
            v-else
          />
          <button class="v-rules__backdrop__close" @click="toggleBackdrop" />
        </div>
      </div>
    </transition>
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
export default class VRules extends Vue {
  private backdropActive = false;

  private toggleBackdrop(): void {
    this.backdropActive = !this.backdropActive;
  }
}
</script>

<style lang="scss" scoped>
.v-rules {
  &__activator {
    background: transparent;
    border: solid 2px #5d718a;
    border-radius: mobile-vw(6px);
    bottom: mobile-vw(56px);
    color: #ffffff;
    cursor: pointer;
    height: mobile-vw(42px);
    font-size: mobile-vw(14px);
    left: 50%;
    letter-spacing: mobile-vw(2px);
    position: fixed;
    transform: translateX(-50%);
    text-transform: uppercase;
    width: mobile-vw(130px);
    &:hover {
      background: #ffffff;
      border-color: #ffffff;
      color: #293251;
    }
  }

  &__backdrop {
    align-items: center;
    background: #ffffff;
    display: flex;
    height: 100vh;
    justify-content: center;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;

    &__content {
      text-align: center;
    }

    &__title {
      color: #293251;
      font-size: mobile-vw(24px);
      font-weight: 700;
      margin: 0 0 mobile-vw(116px);
      text-transform: uppercase;
    }

    &__image {
      display: block;
      margin: 0 0 mobile-vw(116px);
      width: mobile-vw(302px);
    }

    &__close {
      background: transparent url("../assets/img/icon-close.svg") no-repeat
        center center;
      background-size: contain;
      border: none;
      cursor: pointer;
      height: mobile-vw(20px);
      margin: 0 auto;
      width: mobile-vw(20px);
      &:hover {
      }
    }
  }

  @include desktop {
    &__activator {
      border-radius: 9px;
      bottom: 64px;
      height: 42px;
      font-size: 14px;
      left: auto;
      letter-spacing: 2px;
      right: 64px;
      transform: none;
      width: 130px;
    }

    &__backdrop {
      background: rgba(0, 0, 0, 0.5);

      &__content {
        background: #ffffff;
        border-radius: 14px;
        overflow: hidden;
        padding: 32px;
        position: relative;
        width: 402px;
      }

      &__title {
        font-size: 24px;
        margin: 0 0 52px;
        text-align: left;
      }

      &__image {
        margin: 0 auto;
        width: 302px;
      }

      &__close {
        height: 20px;
        position: absolute;
        right: 32px;
        top: 38px;
        width: 20px;
      }
    }
  }
}
</style>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
