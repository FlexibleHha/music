import * as types from './mutations-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  [types.SET_SEARCH_HISTORY](state, paylod) {
    state.searchHistory = paylod
  }
}
export default mutations