<script >
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
}
</script>

<template>
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
