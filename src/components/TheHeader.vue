<script>
import SearchBar from './SearchBar.vue';


export default {
    components: {
        SearchBar
    },
    data() {

    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <div class="logo-text">
                <a class="navbar-brand">Boolflix</a>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Serie TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Film</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" aria-disabled="true">Nuovi e popolari</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" aria-disabled="true">La mia lista</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" aria-disabled="true">Sfoglia per lingua</a>
                    </li>
                </ul>
            </div>
            <form class="d-flex" role="search">
                <SearchBar></SearchBar>
            </form>
        </div>
    </nav>
</template>

<style lang="scss" scoped>

nav{
    .logo-text a {
    color: red;
    font-size: 3rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
}

    form{
        width: 30%;
    }
}

</style>