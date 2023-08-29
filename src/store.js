import axios from "axios"
import { reactive } from "vue";

export const store = reactive({
    search:"",
    movieList: []
});

export function getMovieFromApi() {
axios.get("https://api.themoviedb.org/3/search/movie",{
    params:{
        api_key:"06ecd016abd1064c8b18849d6909846f",
        query: store.search
    }}).then((response) => {
        store.movieList.push(...response.data.results)
    }  )

} 


export function getTVSeriesFromApi() {
axios.get("https://api.themoviedb.org/3/search/tv",{
    params:{
        api_key:"06ecd016abd1064c8b18849d6909846f",
        query: store.search
    }}).then((response) => {
        store.TVlist.push(...response.data.results)
    }  )

} 


