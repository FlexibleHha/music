import { playMode } from 'common/js/config'
import { loadSearch } from 'common/js/cache'

const state = {
  singer: {}, // 歌手
  playing: false, // 播放状态
  fullScreen: false, // 全屏
  playList: [], // 正在播放的列表
  sequenceList: [], // 顺序列表
  mode: playMode.sequence, // 播放的模式
  currentIndex: -1,
  disc: {},
  topList: {},
  searchHistory: loadSearch(),
  playHistory: [],
  favouriteList: [],
}
export default state
