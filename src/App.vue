<script>
import MovieList from "./components/MovieList.vue";
import SearchBar from "./components/SearchBar.vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    MovieList,
    SearchBar,
    TheHeader
  },

  data() {
    return {
    }
  },


}
</script>

<template>
  <TheHeader></TheHeader>
  <main>
    <MovieList></MovieList>
  </main>
</template>

<style lang="scss">
main {
  padding-top: 3rem;
}
</style>
