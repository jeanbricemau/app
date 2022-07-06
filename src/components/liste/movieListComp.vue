<template>
   <div class="d-flex flex-wrap justify-content-around">
      <button @click="changePage(-1)">Precedent</button>
      <span>page => {{ pages }}</span>
      <button @click="changePage(+1)">Suivant</button>
   </div>
   <div class="d-flex flex-wrap justify-content-around">
      <button @click="changeI(-1)">Precedent</button>
      <span>Trie => {{ this.sort_by.at(this.I)}}</span>
      <button @click="changeI(+1)" >Suivant </button>
   </div>

   <tbody class="d-flex flex-wrap justify-content-around">
      <tr v-for="movie in movies" v-bind:key="movie.id">
         <cardComp
            :date="movie.release_date"
            :title="movie.title"
            :overview="movie.overview"
            :img="
               `https://image.tmdb.org/t/p/w600_and_h900_bestv2` +
               movie.poster_path
            "
            :movieId="movie.id"
         />
      </tr>
   </tbody>
</template>

<script>
import axios from 'axios';
import cardComp from '../cardComp.vue';

export default {
   name: 'movieListComp',
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
         sort_by: [
            '&sort_by=popularity.asc',
            '&sort_by=popularity.desc',
            '&sort_by=release_date.asc',
            '&sort_by=release_date.desc',
            '&sort_by=revenue.asc',
            '&sort_by=revenue.desc',
            '&sort_by=primary_release_date.asc',
            '&sort_by=primary_release_date.desc',
            '&sort_by=original_title.asc',
            '&sort_by=original_title.desc',
            '&sort_by=vote_average.asc',
            '&sort_by=vote_average.desc',
            '&sort_by=vote_count.asc',
            '&sort_by=vote_count.desc',
         ],
         I:1,

      };
   },
   methods: {
      changePage(page) {
         if (this.pages < 1) {
            this.pages = 10;
         }else if(this.pages > 10){
           this.pages = 1
         }
          else {
            this.pages += page;
         }
      },
      changeI(i){
         if (this.i < 0) {
            this.I = 13;
         }else if(this.i > 13){
           this.I = 0
         }
          else {
            this.I += i;
         }
      },

   
   },
   mounted() {
      this.changePage(+1);
   },

   updated() {
      axios
         .get(this.URL  + this.sort_by.at(this.I) + '&page=' + this.pages)
         .then((res) => {
            this.movies = res.data.results;
            
         });
   },
};
</script>
