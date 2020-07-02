<template>
  <div class="v-button" :class="{ 'bonus': bonus }">
    <button
      :class="currentButton.name"
      :style="`background: ${currentButton.color};`"
      @click="chooseButton(currentButton)"
    >
      <span class="v-button__content">
        <img
          :src="currentButton.icon"
          :alt="currentButton.name"
          v-if="currentButton.name !== 'no-type'"
        />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
import buttons from '../../utils/buttons'

import IButton from "@/models/IButton";

@Component({
  computed: {
    ...mapState(['bonus'])
  },
  methods: {
    ...mapActions(['chooseButton'])
  }
})
export default class VButton extends Vue {
  @Prop({
    required: true
  }) private buttonType: any;

  @Prop({
    default: false
  }) private noClick: boolean | undefined;

  get currentButton(): any {
    return this.buttonType ? buttons[this.buttonType] : null
  }

  private chooseButton(button: IButton) {
    if (!this.noClick) {
      this.$store.dispatch('chooseButton', button)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-button {
    button {
      border: none;
      border-radius: mobile-vw(130px);
      cursor: pointer;
      height: mobile-vw(130px);
      position: relative;
      width: mobile-vw(130px);

      * {
        transition: ease all .25s;
      }

      &:hover {
        transform: scale(1.1);
      }

      &.no-type {
        .v-button__content {
          background: #192744;
        }
      }
    }

    .v-button__content {
      background: #ffffff;
      border-radius: mobile-vw(100px);
      height: mobile-vw(100px);
      left: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      top: 50%;
      width: mobile-vw(100px);

      img {
        left: 50%;
        height: mobile-vw(52px);
        object-fit: contain;
        position: absolute;
        transform: translate(-50%, -50%);
        top: 50%;
        width: mobile-vw(52px);
      }
    }

    &.bonus {
      button {
        border-radius: mobile-vw(96px);
        height: mobile-vw(96px);
        width: mobile-vw(96px);
      }

      .v-button__content {
        border-radius: mobile-vw(74px);
        height: mobile-vw(74px);
        width: mobile-vw(74px);

        img {
          height: mobile-vw(38px);
          width: mobile-vw(38px);
        }
      }
    }

    @include desktop {
      button {
        border-radius: desktop-vw(200px);
        height: desktop-vw(200px);
        width: desktop-vw(200px);
      }

      .v-button__content {
        border-radius: desktop-vw(152px);
        height: desktop-vw(152px);
        width: desktop-vw(152px);

        img {
          height: desktop-vw(82px);
          width: desktop-vw(82px);
        }
      }

      &.bonus {
        button {
          border-radius: desktop-vw(144px);
          height: desktop-vw(144px);
          width: desktop-vw(144px);
        }

        .v-button__content {
          border-radius: desktop-vw(112px);
          height: desktop-vw(112px);
          width: desktop-vw(112px);

          img {
            height: desktop-vw(62px);
            width: desktop-vw(62px);
          }
        }
      }
    }
  }
</style>
