import { createRouter, createWebHashHistory } from 'vue-router';

import movieListComp from '@/components/liste/movieListComp';
import movieComp from '@/components/movieComp';

const routes = [
  {
    path: '/',
    name: 'home',
    component: movieListComp,
    props:{ URL :'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=true'}
  
  },
  {
    path: '/TopFrance', 
    name: 'TopFrance',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=false&page=1&primary_release_date.gte=1980&with_original_language=fr&with_watch_monetization_types=flatrate'}
  },
  {
    path: '/TopUsa',
    name: 'TopUsa',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=en-US&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'}
  },
  {
    path: '/TopAnnee',
    name: 'TopAnnee',
    component: movieListComp,
    props:{ URL : 'https://api.themoviedb.org/3/discover/movie?api_key=1bb6a53d24541d6fce0843f7b08de85d&language=fr-FR&include_adult=false&include_video=false&page=1&primary_release_year=2022&vote_count.gte=500&with_watch_monetization_types=flatrate'}
  },
  {
    path: '/Single/:id',
    name: 'Single',
    component: movieComp,
    props: true
  },
  

] 
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
