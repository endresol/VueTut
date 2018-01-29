<template>
  <div class="col-md-4">
    <div class="event-card">
      <div class="event-title">{{event.title}}</div>
      <div class="card-text">{{event.description}}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Date: {{event.date}}</li>
        <li class="list-group-item">Location: {{event.location}}</li>
        <li class="list-group-item">Host: {{event.emial}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['event'],

  }
</script>
