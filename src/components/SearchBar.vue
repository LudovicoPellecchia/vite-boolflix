<script >
import { store, getMovieFromApi } from "../store"

export default {
    data() {
        return {
            store
        }
    },
    methods:{
        getMovieFromApi,
<<<<<<< HEAD

=======
>>>>>>> 5efaab4 (aggiunta bandiera)
        clearlist(){
            store.movieList=[]
        }
    },
}
</script>

<template>
    <div class="input-group mb-3">
<<<<<<< HEAD
        <input type="text" class="form-control" v-model="store.searchMovie" placeholder="Cerca un film"
            aria-label="Cerca un film" aria-describedby="button-addon2">
=======
        <input type="text" class="form-control" v-model="store.search" placeholder="Cerca un film"
            aria-label="Cerca un film" aria-describedby="button-addon2"
            @keyup.enter="getMovieFromApi(), clearlist()">
>>>>>>> 5efaab4 (aggiunta bandiera)
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getMovieFromApi(),clearlist()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped></style>
