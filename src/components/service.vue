<template>
  <section class="service" v-for="serviceItem in getInfo" :key="serviceItem">
    <h3 v-if="serviceItem.title==='Подключение'">Тип подключения</h3>
      <h3 v-else>{{ serviceItem.title}}</h3>
      <options></options>
  </section>
</template>

<script>
import {mapGetters, mapActions,} from 'vuex'
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
