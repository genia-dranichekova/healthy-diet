<template>
    <div id="search">
        <div class="search-wrapper">
            <i class="green-text material-icons prefix">search</i>
            <input id="searchField" type="search" placeholder="find your dish"/>
            <button @click="search">Search</button>
        </div>
    </div>
</template>

<script>
    import config from '../config/local'
    
    export default {
        name: "SearchBar",
        data() {
                return {
                    dishes: null
                }
            },
        methods: {
            search() {
                let searchDishes = document.querySelector("#searchField").value;
                axios.get('https://api.spoonacular.com/recipes/complexSearch?query='+searchDishes+'&diet=vegetarian&apiKey='+config.apiKey)
                    .then(response => (this.dishes = response.data.results))
            }
        },
        watch: {
            dishes() {
                this.$parent.sharedItems = this.dishes;
            }
        }
    }
</script>

<style scoped>
    .search-wrapper {
        display: flex;
        padding-top: 15%;
        padding-bottom: 50px;
        margin-left: auto;
        margin-right: auto;
        width: 42%;
    }
    button {
        background-color: #eeee;
        height: 35px;
        width: 90px;
        margin-top: 15px;
        margin-left: 30px;
        border-radius: 15%;
        border-color: forestgreen;
    }
    input[type="search"]::-webkit-input-placeholder {
        color: forestgreen;
    }
    i {
        margin-right: 20px;
        padding-top: 20px;
    }
</style>
