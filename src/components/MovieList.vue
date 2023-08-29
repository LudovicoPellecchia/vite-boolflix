<script >
<<<<<<< HEAD
import { store, getMovieFromApi } from "../store"

export default{
    data(){
        return{
            store
        }
    },
    mounted(){
        getMovieFromApi
    }
=======
import { store } from "../store"
import MovieCard from "./MovieCard.vue";

export default {
    components:{
        MovieCard
    },
    data() {
        return {
            store,
        }
    },
    methods: {
    },
>>>>>>> 5efaab4 (aggiunta bandiera)
}
</script>

<template>
<<<<<<< HEAD
    <ul>
        <li v-for="movie in store.movieList">
            {{ movie.title}}
            {{ movie.original_title}}
            {{ movie.original_language}}
            {{ movie.vote_average}}
        </li>
    </ul>
</template>

<style lang="scss" scoped>
</style>
=======
    <div class="container">
        <div class="row row-cols-5 gy-5">
            <div class="col" v-for="singleMovie in store.movieList ">
                <MovieCard :movie="singleMovie"></MovieCard>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>
>>>>>>> 5efaab4 (aggiunta bandiera)
