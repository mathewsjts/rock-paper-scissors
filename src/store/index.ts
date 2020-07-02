import Vue from "vue";
import Vuex from "vuex";

import { selectRandom } from "@/utils/buttons";
import LocalStorage from '@/utils/local-storage';

import IButton from "@/models/IButton";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bonus: true,
    playing: true,
    score: 0,
    status: null
  },
  mutations: {
    setScore(state, score) {
      state.score = score
    },

    setStatus(state, status) {
      if (status === 'win') state.score++
      if (status === 'lose') state.score--
      LocalStorage.set('score', state.score)

      state.status = status
      state.playing = false
    }
  },
  actions: {
    loadScore: ({ commit }: any) => {
      const score: number = LocalStorage.get('score')

      if (score) {
        commit('setScore', score)
      }
    },

    chooseButton: ({ commit }: any, choosen: IButton) => {
      const random: IButton = selectRandom()

      if (choosen.beats.includes(random.name)) {
        commit('setStatus', 'win')
        return
      }

      if (random.beats.includes(choosen.name)) {
        commit('setStatus', 'lose')
        return
      }

      commit('setStatus', null)
      return
    }
  },
  modules: {}
});
