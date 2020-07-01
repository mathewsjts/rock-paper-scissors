<template>
  <div class="v-score">
    <small>Score</small>
    <span>12</span>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";

  @Component
  export default class VScore extends Vue {}
</script>

<style lang="scss" scoped>
  .v-score {
    align-items: center;
    background: #fff;
    border: solid 1px #000;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    height: 74px;
    justify-content: center;
    line-height: 1;
    min-width: 74px;
    width: 74px;

    small {
      color: #283991;
      font-size: 10px;
      margin: 0 auto 4px;
      text-transform: uppercase;
    }

    span {
      color: #535166;
      font-size: 32px;
      font-weight: 700;
    }

    @media (min-width: 700px) {
      border-radius: 9px;
      height: 114px;
      min-width: 114px;
      width: 114px;

      small {
        font-size: 14px;
        margin: 0 auto 6px;
      }

      span {
        font-size: 46px;
      }
    }
  }
</style>
