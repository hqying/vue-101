import * as types from '../mutation-types'
const state = {
    toFilterList: [
        {id: 1, oops: true},
        {id: 2, oops: false},
        {id: 3, oops: true}
    ]
}

const getters = {
    oopsYes(state) {
        return state.toFilterList.filter(toFilter => toFilter.oops)
    },
    getToFilterById: (state) => (id) => {
        return state.toFilterList.find(toFilter => toFilter.id === id)
    }   
}

const mutations = {
    [types.ADD_ANOTHER] (state, payload) {
        state.toFilterList.push(payload)
    }
}

const actions = {
    [types.ADD_ANOTHER] ({commit}) {
        commit(types.ADD_ANOTHER)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}