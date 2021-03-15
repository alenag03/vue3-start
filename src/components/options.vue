<template>
<section class="service">
    <h4 class="title" @click="setActiveIndex(index)" v-if="serviceItem.title==='Подключение'">Тип подключения:</h4>
    <h4 class="title" @click="setActiveIndex(index)" v-else>{{ serviceItem.title }}</h4>
    <div v-if="index === getActiveIndex">
        <div v-for="variant in serviceItem.variants" :key="variant">
            <div class="option">
                <div class="wrapper__description">
                    <h3 class="option__title">{{ variant.title }}</h3>
                    <p class="description">{{ variant.description }}</p>
                </div>
                <div class="wrapper">
                        <p class="default-price">{{ variant.price_default + ' ₽'}}</p>                    
                    <div class="wrapper__options" v-if="variant.options.length > 0">
                        <form class="features" v-for="item in variant.options" :key="item">
                            <input type="checkbox" id="features__title" @change="countPrice(checkedOptions)" v-bind:value="item.price" v-model="checkedOptions">
                            <label class="features__label" for="features__title">{{ item.title }}</label>
                        </form>
                        <span>Checked: {{ checkedOptions }}</span>
                    </div>
                    <selectOptions :variant="variant"></selectOptions>
                    <button class="button" @click="setOption">Выбрать</button>
                </div>
            </div>
        </div>
    </div>
</section>
</template>2

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import selectOptions from './selectOptions'
export default {
    data () {
        return {
            checkedOptions: [] 
        }
    },
    components: { selectOptions },
    props: {
        serviceItem: {
            type: Object,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
    },
    computed: mapGetters(["getInfo", "getActiveIndex"]),
    methods: {
        ...mapActions(["fetchInfo"]),
        ...mapMutations(["setActiveIndex", "setSelectedItem"]),
        setOption() {
            this.setSelectedItem({
                title: this.$props.serviceItem.title,
                defaultPrice: this.$props.serviceItem.price_default,
                option: this.$props.serviceItem.price_default,
            })
        },
        countPrice (array) {
            if (array.length > 0) {
                let total = array.reduce(function(a, b) {
                    return a + b;
                    })
                    console.log(total);
            }
            
        }
        
    }  
}
</script>

<style scoped>

.service {
    border-top: 2px solid #ccc;
    border-bottom: 2px solid #ccc;
    margin: 20px 10px;
}

.option {
    position: relative;
    margin: 0 auto;
    padding: 30px 20px;
    margin-bottom: 10px;
    background-color: #f8f8f8;
    border-radius: 10px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
}

.option::before {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 8px;
    background-color: #2fcb5a;
    border-radius: 5px;
}

.option::after {
    position: absolute;
    content: "";
    left: 5px;
    top: 0;
    height: 100%;
    width: 3px;
    background-color: #2fcb5a;
}

.option__title {
    text-align: left;
}

.title {
    margin-top: 10;
    cursor: pointer;
    text-align: left;
}

.default-price {
    text-align: right;
}

.description {
    text-align: left;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    white-space: pre-wrap;
    line-height: 20px;
}

.wrapper {
    position: relative;
    width: 20%;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
}

.wrapper::before {
    position: absolute;
    content: "";
    left: -55%;
    top: 0;
    border-left: 1px solid #ccc;
    height: 100%;
    opacity: 0.7;
}

.wrapper__description {
    width: 70%;
}

.features {
    display: flex;
    flex-direction: row;
    /* justify-content: space-between; */
    width: 198px;
    padding: 10px 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
}

.features__label {
    text-align: center;
    margin-left: 15%;
    font-size: 14px;
    padding: 0;
}

#features__title:checked ~ .features__label {
    opacity: 0.7;
}

.button {
    width: 210px;
    padding: 0%;
    padding: 10px 73px;
    font-size: 14px;
    background-color: #98abba;
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    color: #ffffff;
    outline: none;
}

.button__active-state {
    background-color: #2fcb5a;
}

.button:hover,
.button:active {
    background-color: #2fcb5a;
}

</style>>
