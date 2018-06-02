import * as types from '../mutation-types'
const state = {
    count: 0
}

const getters = {
    countTwice: state => {
      return state.count * 2
    },
    countWithSomeCalc: (state, getters) => {
      return getters.countTwice * state.count
    }
}
const mutations = {
    [types.INCREMENT_MUNAME] (state, payload) {
        state.count += payload.n
    }
}

const actions = {
    increment(context, n) {
        setTimeout(() => {
          context.commit(types.INCREMENT_MUNAME, {n: n})
        }, 1000)
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}