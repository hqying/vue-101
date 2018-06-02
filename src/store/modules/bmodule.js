const state = {
    b: 73,
    c: 37
}

const getters = {
    twoTimesB: state => state.b * 2,
    b2PlusC: (state, getters) => getters.twoTimesB + state.c,
    bPlusA: (state, getters, rootState) => state.b + rootState.moduleA.a
}

const mutations = {
    incrementBmut (state) {
        state.b += 1
    }
}

const actions = {
    incrementact ({commit}) {
        setTimeout(() => {
            commit('incrementBmut')
        }, 1000)
    }
}

export default {
    // namespaced: true,
    state,
    getters,
    mutations,
    actions
}