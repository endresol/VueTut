<template>
  <div class="form-inline">
    <h3>Sign in</h3>
    <div class="form-group">
      <input
        type="text"
        placeholder="e-mail"
        class="form-control"
        v-model="email"
      />
      <input
        type="password"
        class="form-control"
        placeholder="password"
        v-model="password"
      />
      <button class="btn btn-primary" @click="signIn">sign in</button>
    </div>
    <p>{{error.message}}</p>
  </div>
</template>

<script>
import { firebaseApp } from '../firebaseApp';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: '',
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
      .catch(error => {
        this.error = error;
      })
    }
  }
};
</script>
