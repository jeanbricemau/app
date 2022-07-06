<template>
<div class="card" style="width: 20rem" >
      <img :src="img" class="card-img-top" />
      <div class="card-body align-item-bottom">
        <h5 class="card-title">{{ title }}</h5>
        <span>{{movieId}}</span>
        <p class="card-text">{{ overview }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ date }}</li>
       <routerLink :to=" {name: 'Single' , params:{id: this.movieId } }" > Plus d'info </routerLink>
      </ul>

</div>
</template>
<script>
import { routerLink } from "vue-router";


export default {
  name: "cardComp",
  components: {
    routerLink,
  
  },
  props: {
    img: String,
    title: String,
    date: String,
    overview: String,
    movieId: Number,

  },
  
  data(){
    return {
    };
  },
  
}
</script>

<style scoped lang="scss">
.card {
  width: fit-content;
  margin: 40px;
  height: fit-content;
  .card-title {
    display: flex;
    align-items: center;
    text-align: center;
    line-height: 1.2rem;
    min-height: calc(2 * 1.2rem);
  }
  .card-text {
    aspect-ratio: 16/9;
    overflow: auto;
    align-content: flex-end;
  }
}

@media screen and (max-width: 768px) {
  .card {
    width: 100%;
    height: 100%;
    margin: 15px !important ;
    &:hover {
      .card-text {
        height: fit-content;
        transition: all 200ms;
      }
    }

    .card-text {
      height: 0px;
      transition: all 200ms;
    }
  }
}
</style>
