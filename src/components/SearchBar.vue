<script >
import { store, getMovieFromApi, getTVSeriesFromApi } from "../store"

export default {
    data() {
        return {
            store
        }
    },
    methods:{
        getTVSeriesFromApi,
        getMovieFromApi,
        clearlist(){
            store.TVlist=[]
            store.movieList=[]
        }
    },
}
</script>

<template>
    <div class="input-group my-searchbar">
        <input type="text" class="form-control" v-model="store.search" placeholder="Cerca un film"
            aria-label="Cerca un film" aria-describedby="button-addon2"
            @keyup.enter="getMovieFromApi(),getTVSeriesFromApi(), clearlist()">
        <button class="btn btn-outline-secondary my-btn" type="button" id="button-addon2" @click="getMovieFromApi(),getTVSeriesFromApi(),clearlist()">Cerca</button>
    </div>
</template>

<style lang="scss" scoped>
.my-searchbar{
    width: 30%;
    padding: 2rem;

    input, .my-btn {
        border: 1px solid rgba(255, 255, 255, 0.532);
        background-color: black;
        color: rgb(223, 223, 223);

    }
}


</style>
