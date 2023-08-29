<script >
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
}
</script>

<template>
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