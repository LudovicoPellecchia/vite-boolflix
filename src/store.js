import axios from "axios"
import { reactive } from "vue";

export const store = reactive({

    movieList: []
});

export function getMovieFromApi() {
    const url = "https://api.themoviedb.org/3/search/movie"
}

