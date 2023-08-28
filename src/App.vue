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
  <SearchBar></SearchBar>
  <MovieList></MovieList>
</template>

<style lang="scss"></style>
