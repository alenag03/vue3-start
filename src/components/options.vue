<template>
  <div v-for="option in getInfo" :key="option">
      <div class="option" v-for="variant in option.variants" :key="variant">
          <div class="wrapper-wide">
          <h3 class="title">{{ variant.title }}</h3>
          <div class="description">{{ variant.description }}</div>
          </div>
          <div class="wrapper options-wrapper">
          <p class="default-price">{{ variant.price_default + '₽'}}</p>
              <div class="wrapper" v-if="variant.options">
                <form class="options-btn" v-for="item in variant.options" :key="item">
                    <input type="checkbox" id="option-title">
                    <label class="options-label" for="option-title">{{ item.title }}</label>
                </form>
              </div>
                <div class="wrapper-select" v-if="variant.select">
                    <div class="check" v-for="option in variant.select" :key="option">
                        <p class="select-description">{{ option.title }}</p>
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
import {mapGetters, mapActions} from 'vuex'
export default {
    computed: mapGetters(["getInfo"]),
    methods: mapActions(["fetchInfo"])
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
    margin-right: 20%;
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

.wrapper-wide {
    width: 70%;
}

.select-description {
    font-size: 12px;
    width: 100%;
    text-align: left;
}

.options-btn {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 210px;
    padding: 10px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
}


.options-label {
    text-align: center;
    margin-left: 15%;
    font-size: 14px;
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

.wrapper-select {
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
