<template>
    <div class="wrapper__select">
        <div v-for="option in variant.select" :key="option">
            <p class="select__description">{{ option.title }}</p>
            <select required class="select" @change="countPrice" v-model="selected">
                <option v-for="item in option.items" :key="item" :value="item.price">{{ item.title }}</option>
            </select>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
    data () {
        return {
            selected: null
        }
    },
    props: { 
        variant: {
            type: Object,
            required: true,
        }
    },
    computed: mapGetters(["getInfo", "getActiveIndex"]),
    methods: {
        ...mapActions(["fetchInfo"]),
        ...mapMutations(["setActiveIndex", "setSelectedItem"]),
        countPrice() {
            this.$emit('select', this.$data.selected)
        }
    }

}
</script>

<style scoped>

.select__description {
    font-size: 12px;
    width: 100%;
    text-align: left;
}

.wrapper__select {
    width: 210px;
}

.select {
    width: 210px;
    margin-bottom: 10px;
    padding: 10px 10px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

</style>