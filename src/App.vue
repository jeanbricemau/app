<template>
  <headerTemp />
    <main class="container-fluid m-auto self-align-center">
     <routerView />
    </main>
  <footerTemp />
</template>
<script>
import headerTemp from './components/template/headerTemp'
import {routerView} from 'vue-router'
import footerTemp from './components/template/footerTemp'


export default {      
  name: 'App',
  components: {
    headerTemp, routerView , footerTemp,
  }
}
</script>
<style scoped  lang="scss">


</style>
