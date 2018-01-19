<template>
    <div>
        <h2>Got jokes?</h2>
        <button class="btn btn-primary" @click="initJokes">Add jokes</button>
        <div>{{$store.state}}</div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      title: "Jokster"
    };
  },
  methods: mapActions([
      'initJokes',
  ])
};
</script>
