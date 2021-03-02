<template>
  <section class="service" v-for="(serviceItem, index) in getInfo" :key="index">
    <h3 class="title" @click="setActiveIndex" v-if="serviceItem.title==='Подключение'">Тип подключения</h3>
      <h3 class="title" @click="setActiveIndex" v-else>{{ serviceItem.title}}</h3>
      <options v-if="index === getActiveIndex"></options>
  </section>
</template>

<script>
import {mapGetters, mapActions, mapMutations,} from 'vuex'
import options from './options.vue'
export default {
  components: { options },
    computed: mapGetters(["getInfo", "getActiveIndex"]),
    methods: {
      ...mapActions(["fetchInfo"]),
      ...mapMutations(["setActiveIndex"])
    } 
}
</script>

<style scoped>

h3 {
  text-align: left;
}

.title {
  cursor: pointer;
}

.toggleActive {
  display: none;
}

</style>>
