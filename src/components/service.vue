<template>
  <section v-for="(serviceItem, index) in getInfo" :key="serviceItem.title">
    <options :serviceItem="serviceItem" :index="index"></options>
  </section>
  <footer>
      <div class="footer">
        <p class="footer-final">Итого к оплате</p>
        <p class="price_total">{{  ' ₽' }}</p>
      </div>
    </footer>
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

.footer {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  background-color: #2fcb5a;
  margin: 20px 10px;
  border-radius: 5px;
}

.footer-final {
  padding-left: 20px;
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  margin: 16px 0;
}

.price_total {
  padding-right: 20px;
  font-size: 24px;
  color: #fff;
  margin: 16px 0;
}

</style>>
