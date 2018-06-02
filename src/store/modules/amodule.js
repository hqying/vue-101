const state = {
    a: 3
}

const getters = {
    twoTimesA: state => state.a * 2,
    aPlus2b: (state, getters, rootState, rootGetters) => state.a + rootGetters.twoTimesB
}

const mutations = {
    incrementmut (state) {
        state.a += 1
    },
    incrByNMut (state, n) {
        state.a += n
    }
}

const actions = {
    incrementact ({commit}) {
        setTimeout(() => {
            commit('incrementmut')
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