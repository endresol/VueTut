<template>
  <div>
      <h3>{{title}}</h3>
      <div class="col-md-12">
          <Character 
            v-for="id in inital_ids"
            v-bind:key= id
            :id="id" 
            />
      </div>
      
  </div>
</template>

<script>
import Character from './character';

export default {
    data() {
        return {
            title: 'TEAM',
            inital_ids: [1, 13, 14],
        }
    },
    components: {
        Character,
    }
}
</script>
