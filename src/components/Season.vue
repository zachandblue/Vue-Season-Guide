<template>

    <router-link :to="seasonPath" >

    <img :src="season.image && season.image.medium" :alt="season.name" />

  </router-link>

</template>

<script>
export default {
  props: ['season'],

  computed: {
    seasonPath: function() {
      return `/season/${this.season.id}`;
    }
  }
};
</script>


<style scoped>
img {
  box-shadow: 0 0 35px black;
}
</style>
