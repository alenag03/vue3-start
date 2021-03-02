<template>
  <div v-for="option in getInfo" :key="option">
      <div class="option" v-for="variant in option.variants" :key="variant">
          <h1>qwqwewqeq</h1>
          <div class="wrapper__description">
          <h3 class="title">{{ variant.title }}</h3>
          <div class="description">{{ variant.description }}</div>
          </div>
          <div class="wrapper wrapper__options">
          <p class="default-price">{{ variant.price_default + '₽'}}</p>
              <div class="wrapper" v-if="variant.options">
                <form class="features" v-for="item in variant.options" :key="item">
                    <input type="checkbox" id="features__title">
                    <label class="features__label" for="features__title">{{ item.title }}</label>
                </form>
              </div>
                <div class="wrapper__select" v-if="variant.select">
                    <div v-for="option in variant.select" :key="option">
                        <p class="select__description">{{ option.title }}</p>
                            <select required class="select">
                                <option v-for="item in option.items" :key="item">{{ item.title }}</option>
                            </select>
                    </div>
              </div>
              <button class="button">Выбрать</button>
          </div>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    computed: mapGetters(["getInfo"]),
    methods: {
        ...mapActions(["fetchInfo"]),
        ...mapMutations(["toggleActive"])
    }  
}
</script>

<style scoped>

.option {
    margin: 0 auto;
    padding: 30px 20px;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

.title {
    margin-top: 0;
}

.default-price {
    text-align: right;
    margin-right: 40%;
}

.description {
    text-align: left;
    width: 70%;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
}

.wrapper {
    width: 30%;
    display: flex;
    flex-flow: column;
}

.wrapper__description {
    width: 70%;
}

.select__description {
    font-size: 12px;
    width: 100%;
    text-align: left;
}

.features {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 210px;
    padding: 10px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}

.features__label {
    text-align: center;
    margin-left: 15%;
    font-size: 14px;
}

#features__title:checked ~ .features__label {
    opacity: 0.7;
}

.button {
    width: 220px;
    padding: 0%;
    padding: 10px 73px;
    font-size: 14px;
    background-color: #98abba;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    color: #ffffff;
}

.button:hover,
.button:active {
    background-color: #2fcb5a;
}

.wrapper__select {
    width: 210px;
}

.select {
    width: 220px;
    margin-bottom: 10px;
    padding: 10px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

</style>>
