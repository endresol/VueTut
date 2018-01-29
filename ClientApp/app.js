import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import App from 'components/app-root'
import { firebaseApp } from './firebaseApp';

Vue.prototype.$http = axios;

sync(store, router)

firebaseApp.auth().onAuthStateChanged( user => {
  if (user) {
    store.dispatch('signIn', user);
    router.push('/turnout');
  } else {
    router.replace('/signin');
  }
});

const app = new Vue({
    store,
    router,
    ...App
})

export {
    app,
    router,
    store
}
