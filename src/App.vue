<template>
  <div id="app">
    <service></service>
    
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import Service from './components/service.vue'
export default {
  components: { Service },
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
