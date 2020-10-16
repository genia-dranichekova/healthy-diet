<template>
  <div id="app">
    <search-bar></search-bar>
      <div class="container" v-show="preview">
          <figure class="photo" v-for="item in previewDishes">
              <img :src="item.image">
              <figcaption>{{ item.title }}</figcaption>
          </figure>
      </div>
    <div class="container">
        <figure class="photo" v-for="item in sharedItems">
          <img :src="item.image">
          <figcaption>{{ item.title }}</figcaption>
        </figure>
    </div>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar";

export default {
    name: 'App',
    components: {
        SearchBar
    },
    props: {},
    data() {
        return {
            sharedItems: null,
            preview: true,
            previewDishes: [
                {
                    "id": 72630,
                    "title": "Deep Dish Spinach Pie Recipe",
                    "image": "https://spoonacular.com/recipeImages/72630-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 715497,
                    "title": "Berry Banana Breakfast Smoothie",
                    "image": "https://spoonacular.com/recipeImages/715497-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 715540,
                    "title": "Summer Berry Salad",
                    "image": "https://spoonacular.com/recipeImages/715540-312x231.jpg",
                    "imageType": "jpg"
                }
            ]
        }
    },
    watch: {
        sharedItems() {
            this.preview = this.sharedItems.length <= 0;
        }
    }
}
</script>

<style>
    @import "~materialize-css/dist/css/materialize.min.css";
    @import "http://fonts.googleapis.com/icon?family=Material+Icons";

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    body {
        background-image: url("https://img1.goodfon.com/original/1920x1080/b/87/muesli-coffee-juice.jpg");
        background-attachment: fixed;
        background-repeat: no-repeat;
        background-position: center;
    }
    .container {
        width: 100%;
        max-width: 960px;
        margin: 0 auto;
    }
    .photo {
        margin: 0;
        float: left;
        width: 33.333333%;
        padding: 10px;
        box-sizing: border-box;
    }
    figcaption {
        height: 45px;
        background-color: #eeee;
        border-radius: 34%;
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
    }
    .photo img {
        display: block;
        max-width: 100%;
        height: auto;
        padding: 10px;
        background-color: #eeee;
        box-sizing: border-box;
        border-radius: 18%;
    }
</style>
