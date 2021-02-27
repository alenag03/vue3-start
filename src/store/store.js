export default {
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
        }
    },
    state: {
        info: []
    },
    getters: {
        getInfo(state) {
            return state.info
        }
    }
}