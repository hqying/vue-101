import Vue from 'vue'
import Vuex from 'vuex'

import moduleA from './modules/amodule'
import bmodule from './modules/bmodule'

Vue.use(Vuex)

// const moduleA = {
//     namespaced: true,
//     state: {
//         a: 3
//     },
//     getters: {
//         twoTimesA: state => state.a * 2
//     },
//     mutations: {
//         incrementmut (state) {
//             state.a += 1
//         }
//     },
    
//     actions: {
//         incrementact ({commit}) {
//             setTimeout(() => {
//                 commit('incrementmut')
//             }, 1000)
//         }
//     }
// }

export default new Vuex.Store({
    modules: {
        moduleA,
        moduleB: bmodule
    }
})


// export default new Vuex.Store({
//     modules: {
//         amodule,
//         bmodule
//     }
// })