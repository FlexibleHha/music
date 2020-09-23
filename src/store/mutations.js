import * as types from './mutations-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING](state, paylod) {
    state.playing = paylod
  },
  [types.SET_FULLSCREEN](state, paylod) {
    state.fullScreen = paylod
  },
  [types.SET_PLAY_LIST](state, paylod) {
    state.playList = paylod
  },
  [types.SET_SEQUENCE_LIST](state, paylod) {
    state.sequenceList = paylod
  },
  [types.SET_MODE](state, paylod) {
    state.mode = paylod
  },
  [types.SET_CURRENT_INDEX](state, paylod) {
    state.currentIndex = paylod
  },
  [types.SET_SEARCH_HISTORY](state, paylod) {
    state.searchHistory = paylod
  }
}
export default mutations