import * as types from './mutation-types';

const jokes_url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev';

export const initJokes = ({commit}) => {
  fetch(`${jokes_url}/random_ten`, {
    Method: 'GET',
  })
  .then(response => response.json())
  .then(json => commit(types.INIT_JOKES, json));
};

export const addJoke = ({commit}, obj) => {
  fetch(`${jokes_url}/random_joke`, {
    Method: 'GET',
  })
  .then(response => response.json())
  .then(json => commit(types.ADD_JOKE, json));
};

export const removeJoke = ({commit}, index) => {
  commit(types.REMOVE_JOKE, index);
}

export const setCounter = ({commit}, obj) => {
  commit(types.MAIN_SET_COUNTER, obj)
};

export const signIn = ({commit}, user_payload) => {
  commit(types.SIGN_IN, user_payload);
}


