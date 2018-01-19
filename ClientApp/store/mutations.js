import * as types from './mutation-types';

export const mutations = {
    [types.MAIN_SET_COUNTER] (state, obj) {
        state.counter = obj.counter;
    },

    [types.INIT_JOKES] (state, payload) {
        state.jokes.push(...payload);
    },
};
