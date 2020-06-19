import * as types from './mutations-types'
import {
  saveSearch,
  clearSearch,
  deleteSearch
} from "common/js/cache";

// 保存浏览记录
export const saveSearchHistory = function ({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}

// 删除浏览记录
export const deleteSearchHistory = function ({ commit }, query) {
  commit(types.SET_SEARCH_HISTORY, deleteSearch(query))
}

// 清空所有记录
export const clearSearchHistory = function ({ commit }) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
