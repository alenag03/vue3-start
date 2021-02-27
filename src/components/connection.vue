<template>
  <div class="connection">
      <h3 class="connection-type">Тип подключения</h3>
      <div class="connection-standard">
          <h3 class="connection-title">{{ getInfo[0]?.variants[0].title }}</h3>
          
      </div>
      <div class="connection-lux"></div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: mapGetters(["getInfo"]),
    methods: mapActions(["fetchInfo"]),
    async mounted() {
    this.fetchInfo()
  }
}
</script>

<style>

h3 {
    text-align: left;
}

.connection-title {
  font-size: 16px;
}

</style>
