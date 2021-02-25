<template>
  <div id="app">
    <connection></connection>
    <div class="info" v-for="info in getInfo" :key="info.title">
      <h2>{{ info.title }}</h2>
      <p>{{ info.variants[0].title }}</p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import connection from './components/connection.vue'
export default {
  components: { connection },
  name: 'App',
  computed: mapGetters(["getInfo"]),
  methods: mapActions(["fetchInfo"]),
  async mounted() {
    this.fetchInfo()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.info {
  border: 1px solid gray;
}
</style>
