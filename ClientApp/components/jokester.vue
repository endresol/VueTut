<template>
    <div>
        <h2>Got jokes?</h2> 
        <button class="btn btn-primary" @click="initJokes">Add 10 jokes</button>
        <button class="btn btn-primary" @click="addJoke">Add joke</button>
        <br />
        <span v-for="type in types" >
          <input 
            type="checkbox" 
            :value="type" 
            v-model="checkedTypes"
            checked 
          />
          <label>{{type}}</label> &nbsp;
        </span>
        <div class="col-md-12">
          <Joke 
            v-for="(joke, index) in $store.state.jokes"
            v-show="checkedTypes.includes(joke.type)"
            :joke="joke"
            :index="index"
            key="id"
          />
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import Joke from './joke.vue';

export default {
  data() {
    return {
      title: "Jokster",
      types: ['general', 'knock-knock', 'programming'],
      checkedTypes: ['general', 'knock-knock', 'programming'],
    };
  },
  methods: mapActions([
      'initJokes',
      'addJoke',
  ]),
  components: {
    Joke,
  }
};
</script>
