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
                        <p class="default-price">{{ variant.price_default + countPrice(variant.title) + ' ₽'}}</p>                    
                    <div class="wrapper__options" v-if="variant.options.length">
                        <form class="features" v-for="item in variant.options" :key="item">
                            <input type="checkbox" id="features__title" :value="item.price" v-model="checked[variant.title]">
                            <label class="features__label" for="features__title">{{ item.title }}</label>
                        </form>
                    </div>
                    <selectOptions v-if="variant.select.length" @select="(v) => setValue(variant.title, v)" :variant="variant"></selectOptions>
                    <button class="button" @click="setOption(variant.title)">Выбрать</button>
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
            checked: {}, 
            selectedVariant: {},
            selectedOptions: {}
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
    emits: ['select'],
    computed: mapGetters(["getInfo", "getActiveIndex", "getSelectedItems"]),
    methods: {
        ...mapActions(["fetchInfo"]),
        ...mapMutations(["setActiveIndex", "setSelectedItems"]),
        setOption(title) {
            const data = this.$data.selectedVariant[title]
            
            this.getSelectedItems.push(data)
            console.log(this.getSelectedItems);
            this.getSelectedItems.forEach((variant) => {
                const priceDefault = variant.price_default
                if (variant.options.length) {
                    console.log(this.countPrice(variant.title));
                }
                if (variant.select.length) {
                    console.log(this.setValue(variant.title));
                }
                console.log(priceDefault);
            })
        },
        countPrice (title) {
            const data = this.$data.checked[title]

            if (!Array.isArray(data)) return data

            if (!data.length) return 0

            const total = data.reduce((r, item) => r + item)
            return total           
        },
        setValue (title, value) {
            this.$data.checked[title] = value
        }
        
    },
    beforeMount() {
        this.$props.serviceItem.variants.forEach((v) => {
            this.$data.checked[v.title] = v.options.length ? [] : 0

            this.$data.selectedVariant[v.title] = v
        })
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
