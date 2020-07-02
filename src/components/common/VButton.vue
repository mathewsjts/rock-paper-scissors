<template>
  <div class="v-button" :class="{ 'bonus': bonus }">
    <button
      :class="buttonType"
      :style="`background: ${currentButton.color};`"
    >
      <span class="v-button__content">
        <img
          :src="currentButton.icon"
          :alt="buttonType"
        />
      </span>
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {mapState} from "vuex";
import buttons from '../../utils/buttons'

@Component({
  computed: {
    ...mapState(['bonus'])
  }
})
export default class VButton extends Vue {
  @Prop({
    required: true
  }) private buttonType: any;

  get currentButton(): any {
    return buttons[this.buttonType]
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
        border-radius: 200px;
        height: 200px;
        width: 200px;
      }

      .v-button__content {
        border-radius: 152px;
        height: 152px;
        width: 152px;

        img {
          height: 82px;
          width: 82px;
        }
      }

      &.bonus {
        button {
          border-radius: 144px;
          height: 144px;
          width: 144px;
        }

        .v-button__content {
          border-radius: 112px;
          height: 112px;
          width: 112px;

          img {
            height: 62px;
            width: 62px;
          }
        }
      }
    }
  }
</style>
