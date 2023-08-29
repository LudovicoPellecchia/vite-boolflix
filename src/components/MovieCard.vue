<script >
import { store, getMovieFromApi, getTVSeriesFromApi } from "../store"

export default {
    props: {
        movie: Object,
        tvSeries: Object
    },

    data() {
        return {
            store,
        }
    },
    methods: {
        checkLangFlag(flag) {
            if (flag === "en") {
                return "us"
            }
            else if (flag === "ja") {
                return "jp"
            }
            else if (flag === "zh") {
                return "cn"
            }
            else if (flag === "hi" || flag === "te") {
                return "in"
            }
            else if (flag === "ko") {
                return "kr"
            }
            return flag
        },

        roundAverageVote(){
        }
    },

    mounted() {
        getMovieFromApi
        getTVSeriesFromApi
    },

}
</script>

<template>
    <div class="my-card">

        <div v-if="movie">
            <div class="img-preview">
                <img :src="`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`" alt="">
            </div>
            <div>{{ movie.title }}</div>
            <div>{{ movie.original_title }}</div>
            <div><img :src="`https://flagsapi.com/${checkLangFlag(movie.original_language).toUpperCase()}/flat/24.png`">
            </div>
            <div>{{ movie.vote_average }}</div>
        </div>

        <div v-else-if="tvSeries">
            <div class="img-preview">
                <img :src="`https://image.tmdb.org/t/p/w300/${tvSeries.backdrop_path}`" alt="">
            </div>
            <div>{{ tvSeries.name }}</div>
            <div>{{ tvSeries.original_name }}</div>
            <div><img :src="`https://flagsapi.com/${checkLangFlag(tvSeries.original_language).toUpperCase()}/flat/24.png`">
            </div>
            <div>{{ tvSeries.vote_average }}</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.img-preview img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
