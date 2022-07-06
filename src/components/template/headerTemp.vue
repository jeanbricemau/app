<template>
  <header class="p-5">
    <nav>
      <router-link to="/"><h1>VueWatch</h1></router-link>
      <router-link to="/TopFrance">Meilleur film Francais</router-link>
      <router-link to="/TopUsa">Meilleur film americain</router-link>
      <router-link to="/TopAnnee">Film sortis cette annee</router-link>
    </nav>
  </header>
</template>
<script>
import { routerLink } from "vue-router";

export default {
  name: "headerTemp",
  components: {
    routerLink,
  },

  props: {
    title: String,
  },
};
</script>
<style scoped lang="scss">
nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
  margin: auto;

  a {
    &:first-of-type {
      align-self: flex-start;
      margin: auto;
      margin-left: 0px;
    }
    color: red;
    text-align: center;
    width: fit-content;
    margin: auto 20px;
    font-family: "Roboto Flex", sans-serif;
    color: black;
    transition: all 200ms;

    &:hover {
      color: rgb(32, 32, 32);
      transition: all 200ms;
    }
  }
}
@media screen and (max-width: 768px) {
  nav {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    a {
      margin: auto;
      margin-left: 0px;
    }
  }
}
  

</style>
