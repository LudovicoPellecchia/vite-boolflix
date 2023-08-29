<script >
import { store, getMovieFromApi } from "../store"

export default {
    props: {
        movie: Object,
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
        }
    },

    mounted() {
        getMovieFromApi
    },

}
</script>

<template>
    <div class="my-card">
        {{ movie.title }}
        {{ movie.original_title }}
        <img :src="`https://flagsapi.com/${checkLangFlag(movie.original_language).toUpperCase()}/flat/24.png`">
        {{ movie.vote_average }}
    </div>
</template>

<style lang="scss" scoped></style>