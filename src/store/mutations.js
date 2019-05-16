import * as types	form './mutations-types'

const mutations = {
	[types.SET_SINGER](state, singer) {
		state.singer = singer
	}
}
export default mutations