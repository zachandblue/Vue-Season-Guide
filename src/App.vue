<template>
  <div id="app" >
    <Header :title="title"/>
      <transition name="fade">
        <router-view />
      </transition>
  </div>


</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'app',
  data() {
    return {
      title: 'Homeland Season Guide'
    };
  },
  components: {
    Header
  }
};
</script>

<style>
#app {
  font-family: 'Special Elite', Courier, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
}
</style>
