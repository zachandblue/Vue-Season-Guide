<template>
    <div class="season-wrapper" >
      <div class="season-image" :style="styles">
      </div>
      <div class="season-info">
        <h1>Season {{ season.number }}</h1>
        <h2>Premeire Date: {{ season.premiereDate}}</h2>
        <h3>
          {{ season.summary && season.summary.replace(/<(.|\n)*?>/g, '') }}
        </h3>
        <div class="back-button">
          <router-link to="/">
            ← Back
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
import _ from 'lodash';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';
export default {
  data() {
    return {
      seasons: {},
      season: {}
    };
  },
  created: function() {
    this.fetchData();
  },
  methods: {
    fetchData: async function() {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows/7/seasons`);
        const seasons = await res.json();
        const season = await _.find(seasons, {
          id: parseInt(this.$route.params.id)
        });
        this.season = season;
      } catch (e) {
        // eslint-disable-next-line
        console.log(e);
      }
    }
  },
  computed: {
    styles() {
      return {
        background: `url(${this.season.image &&
          this.season.image.medium}) no-repeat center right/ 100% 100% `
      };
    }
  }
};
</script>

<style>
h1 {
  color: white;
  margin: 0;
  padding: 8px;
  background-color: #000;
  text-align: center;
}
h2,
h3 {
  font-family: 'Open Sans Condensed', Courier, sans-serif;
  padding: 10px;
}
a {
  color: white;
  text-decoration: none;
}
.season-wrapper {
  position: relative;
  display: grid;
  width: 90vw;
  max-width: 800px;
  grid-template-columns: 1fr 2fr;
  box-shadow: 0 0 35px black;
  margin: 10vh auto;
}

@media (max-width: 760px) {
  .season-wrapper {
    grid-template-columns: 1fr;
  }
}

.season-info {
  background: white;
  color: white;
  height: 60vh;
  text-align: left;
  background: #111;
}

.season-image {
  height: 60vh;
  background-size: cover;
}

.back-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
