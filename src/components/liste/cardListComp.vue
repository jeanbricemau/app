<template>
<tbody class="d-flex flex-wrap justify-content-around ">
    <tr v-for="movie in movies" v-bind:key="movie.id" :movieId="movieId" >
          <cardComp 
            :date="movie.release_date"
            :title="movie.title"
            :overview="movie.overview"
            :img="`https://image.tmdb.org/t/p/w600_and_h900_bestv2` + movie.poster_path "
            :movieId="movie.id"
          />
      </tr>
</tbody>

</template>

<script>
import router from "axios";
import cardComp from '../cardComp.vue'

export default {
name: "cardListComp",
components: {
  cardComp,
},
props:{
  list: Array,
  
},
}
</script>

<style>

</style>