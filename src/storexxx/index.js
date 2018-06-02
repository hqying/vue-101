import Vue from 'vue'
import Vuex from 'vuex'
// import * as types from './mutation-types'

import countmodule from './modules/count_module'
import tofiltermodule from './modules/tofilter_module'

Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     count: 0,
//     toFilterList: [
//       {id: 1, oops: true},
//       {id: 2, oops: false},
//       {id: 3, oops: true}
//     ]
//   },
//   getters: {
//     countTwice: state => {
//       return state.count * 2
//     },
//     countWithSomeCalc: (state, getters) => {
//       return getters.countTwice * state.count
//     },
//     oopsYes(state) {
//       return state.toFilterList.filter(toFilter => toFilter.oops)
//     },
//     getToFilterById: (state) => (id) => {
//       return state.toFilterList.find(toFilter => toFilter.id === id)
//     }
//   },
//   mutations: {
//     [types.INCREMENT_MUNAME] (state, payload) {
//       state.count += payload.n
//     }
//   },
//   actions: {
//     increment(context, n) {
//       setTimeout(() => {
//         context.commit('INCREMENT', {n: n})
//       }, 1000)
//     }
//   }
// })

export default new Vuex.Store({
  modules: {
    countmodule,
    tofiltermodule
  }
})