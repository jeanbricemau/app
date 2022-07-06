<template>
  <div class="d-flex flex-wrap justify-content-around">
    <button @click="changePage(-1)">Precedent</button>
    <span>page => {{ pages }}</span>
    <button @click="changePage(+1)">Suivant</button>

    
  </div>

  <tbody class="d-flex flex-wrap justify-content-around">
    <tr v-for="movie in movies" v-bind:key="movie.id" :movieId="movieId">
      <cardComp
        :date="movie.release_date"
        :title="movie.title"
        :overview="movie.overview"
        :img="
          `https://image.tmdb.org/t/p/w600_and_h900_bestv2` + movie.poster_path
        "
        :movieId="movie.id"
      />
    </tr>
  </tbody>
</template>

<script>
import axios from "axios";
import cardComp from "../cardComp.vue";

export default {
  name: "movieListComp",
  components: {
    cardComp,
  },
  props: {
    URL: String,
  },
  data() {
    return {
      movies: [],
      pages: 0,
      value: "popularity.desc",
    };
  },
  methods: {
    changePage(page) {
      if (this.page < 1) {
        this.pages = 1;
      } else {
        this.pages += page;
      }
    },
  },
  mounted() {
    this.changePage(+1);
  },

  updated() {
    axios
      .get(this.URL + "&sort_by=" + this.value + "&page=" + this.pages)
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);
      });
  },
};
</script>
