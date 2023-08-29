<script>
import MovieList from "./components/MovieList.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  components: {
    MovieList,
    SearchBar
  },

  data() {
    return {
    }
  },


}
</script>

<template>
  <header>
    <SearchBar></SearchBar>
  </header>
  <main>
    <MovieList></MovieList>
  </main>
</template>

<style lang="scss">
main{
  padding-top: 3rem;
}</style>
