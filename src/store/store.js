export default {
    state: {
        info: [],
        activeIndex: 0,
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
        setActiveIndex (state, activeIndex) {
            state.activeIndex = activeIndex
        }
        
    },
    getters: {
        getInfo(state) {
            return state.info
        },
        getActiveIndex (state) {
            return state.activeIndex;
        },
    }
}