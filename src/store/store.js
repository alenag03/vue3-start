export default {
    state: {
        info: [],
        activeIndex: 0,
        selectedItems: []
    },
    actions: {
        async fetchInfo (ctx) {
            const res = await fetch('http://localhost:3000/data')
            const info = await res.json()

            ctx.commit('updateInfo', info)
        }
    },
    mutations: {
        updateInfo (state, info) {
            state.info = info
        },
        setActiveIndex (state, newIndex) {
            state.activeIndex = newIndex
        },
        setSelectedItems (state, items) {
            state.selectedItems.push(items)
        } 
    },
    getters: {
        getInfo (state) {
            return state.info
        },
        getActiveIndex (state) {
            return state.activeIndex;
        },
        getSelectedItems (state) {
            return state.selectedItems
        }
      
    }
}