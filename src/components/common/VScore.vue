<template>
  <div class="v-score">
    <small>Score</small>
    <span>{{ score }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

@Component({
  computed: {
    ...mapState(['score'])
  },

  created() {
    this.loadScore()
  },

  methods: {
    ...mapActions(['loadScore'])
  }
})
export default class VScore extends Vue {}
</script>

<style lang="scss" scoped>
.v-score {
  align-items: center;
  background: #fff;
  border: solid 1px #000;
  border-radius: mobile-vw(9px);
  display: flex;
  flex-direction: column;
  height: mobile-vw(74px);
  justify-content: center;
  line-height: 1;
  min-width: mobile-vw(74px);
  width: mobile-vw(74px);

  small {
    color: $score-text;
    font-size: mobile-vw(10px);
    margin: 0 auto mobile-vw(4px);
    text-transform: uppercase;
  }

  span {
    color: $dark-text;
    font-size: mobile-vw(32px);
    font-weight: 700;
  }

  @include desktop {
    border-radius: desktop-vw(9px);
    height: desktop-vw(114px);
    min-width: desktop-vw(114px);
    width: desktop-vw(114px);

    small {
      font-size: desktop-vw(14px);
      margin: 0 auto desktop-vw(6px);
    }

    span {
      font-size: desktop-vw(46px);
    }
  }
}
</style>
