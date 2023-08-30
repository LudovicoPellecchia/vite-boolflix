<script >
import { triggerRef } from "vue"
import { store, getMovieFromApi, getTVSeriesFromApi } from "../store"

export default {
    props: {
        movie: Object,
        tvSeries: Object
    },

    data() {
        return {
            store,
            hovered: false
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

        hoverDelay() {
            setTimeout(() => { this.hovered = true }, 700)
        },

        clearHoverDelay() {
            clearTimeout(this.hovered)
            return this.hovered = false

        },

        ImgPreviewFunction(){
        let url = "https://image.tmdb.org/t/p/w780";
        if (this.movie && this.movie.backdrop_path !== null) {
            url += this.movie.backdrop_path;
        } else if (this.tvSeries && this.tvSeries.backdrop_path !== null) {
            url += this.tvSeries.backdrop_path;
        } else {
            url = "/video-movie-placeholder-image-grey.png";
        }

        return url;
    },

        roundAverageVote() {
        }
    },

    mounted() {
        getMovieFromApi
        getTVSeriesFromApi
    },

}
</script>

<template>
    <div class="my-card" @mouseenter="hoverDelay" @mouseleave="clearHoverDelay" :class="{ 'on-hover': hovered }">

        <div v-if="movie">
            <div class="img-preview">
                <img :src="ImgPreviewFunction()" alt="">
            </div>
            <div class="preview-info">
                <div>{{ movie.title }}</div>
                <div>{{ movie.original_title }}</div>
                <div><img :src="`https://flagsapi.com/${checkLangFlag(movie.original_language).toUpperCase()}/flat/24.png`">
                </div>
                <div>{{ movie.vote_average }}</div>
            </div>

        </div>

        <div v-else-if="tvSeries">
            <div class="img-preview">
                <img :src="ImgPreviewFunction()" alt="">
            </div>
            <div class="preview-info">
                <div>{{ tvSeries.name }}</div>
                <div>{{ tvSeries.original_name }}</div>
                <div><img
                        :src="`https://flagsapi.com/${checkLangFlag(tvSeries.original_language).toUpperCase()}/flat/24.png`">
                </div>
                <div>{{ tvSeries.vote_average }}</div>
            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
.my-card {
    color: white;
    background-color: #141414;
    height: 100%;
    position: relative;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 10px 0 rgba(0, 0, 0, 0.15);
    transition: transform 0.4s;

    .preview-info {
        padding: 20px;
    }
}

.on-hover:hover {
    z-index: 2;
    transform: scale(1.4);
}



.img-preview img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>