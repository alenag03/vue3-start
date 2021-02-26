<template>
  <section class="service" v-for="serviseItem in getInfo" :key="serviseItem">
      <h3>{{ serviseItem.title}}</h3>
      <options></options>
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import options from './options.vue'
export default {
  components: { options },
    computed: mapGetters(["getInfo"]),
    methods: mapActions(["fetchInfo"])
}
</script>

<style>

h3 {
  text-align: left;
}



</style>
