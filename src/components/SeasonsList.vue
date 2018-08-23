<template>
  <ul>
    <li v-for="(season) in seasons">
      <Season :season="season"></Season>
    </li>
  </ul>
</template>

<script>
import Season from './Season.vue';

export default {
  name: 'MoviesList',
  data() {
    return {
      seasons: []
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch('https://api.tvmaze.com/shows/7/seasons');
        const seasons = await res.json();

        this.seasons = seasons;
      } catch (e) {
        console.log(e);
      }
    }
  },
  components: { Season }
};
</script>

<style scoped>
ul {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
}
@media (max-width: 760px) {
  ul {
    grid-template-columns: 1fr;
  }
}
</style>
