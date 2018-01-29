import Vue from 'vue'
import Vuex from 'vuex'

import { mutations } from './mutations';
import * as actions from './actions';

Vue.use(Vuex)

// TYPES

// STATE
const state = {
    counter: 0,
    jokes: [],
    user: {},
    events: [],
}

// // ACTIONS
// const actions = ({
//     setCounter({ commit }, obj) {
//         commit(MAIN_SET_COUNTER, obj)
//     }
// })

export default new Vuex.Store({
    state,
    mutations,
    actions
});
