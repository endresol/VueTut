import * as types from './mutation-types';

const jokes_10_url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten';

export const initJokes = ({commit}) => {
  fetch(jokes_10_url, {
    Method: 'GET',
  })
  .then(response => response.json())
  .then(json => commit(types.INIT_JOKES, json));
};

export const setCounter = ({commit}, obj) => {
    commit(types.MAIN_SET_COUNTER, obj)
};
