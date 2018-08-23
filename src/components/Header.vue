<template>
  <header>
    <h1>
      <router-link to="/">
        {{title}}

      </router-link>
    </h1>


  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String
  },
  data() {
    return {
      name: 'Movie DB'
    };
  }
};
</script>

<style scoped>
header {
  background-color: #111;
  padding-bottom: 4px;
  color: white;
}

h1 {
  padding: 8px;
}

a {
  color: white;
  text-decoration: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
