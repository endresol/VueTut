<template>
  <div>
    <h2> Events </h2>
    <AddEvent />
    <button class="btn btn-danger btn-sm signout_btn" @click="signOut">Sign Out</button>
    <div class="col-md-12">
      <EventItem
        v-for="(event_item, index) in this.$store.state.events"
        :event="event_item"
        v-bind:key="index"
      />
    </div>
  </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp';
import AddEvent from './addevent';
import EventItem from './eventitem';

export default {
  data() {
    return {};
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
      firebaseApp.auth().signOut();
    }
  },

  components: {
    AddEvent,
    EventItem,
  },

  mounted() {
    eventsRef.on('value', snap => {
      let events = [];
      snap.forEach(element => {
        events.push(element.val())
      });
      this.$store.dispatch('setEvents', events);
    })
  }
};
</script>
