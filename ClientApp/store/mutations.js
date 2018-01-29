import * as types from './mutation-types';

export const mutations = {
    [types.MAIN_SET_COUNTER] (state, obj) {
        state.counter = obj.counter;
    },

    [types.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },
    [types.ADD_JOKE] (state, payload) {
        state.jokes.push(payload);
    },
    [types.REMOVE_JOKE] (state, index) {
        state.jokes.splice(index, 1);
    },
    [types.SIGN_IN] (state, user_payload) {
      state.user = user_payload;
  },
};
