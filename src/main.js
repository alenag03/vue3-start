import { createApp } from 'vue'
import { createStore } from 'vuex'
import info from './store/store'
import App from './App.vue'

const app = createApp(App)
const store = createStore({
    modules: {
        info
    }
})

app.use(store)

app.mount('#app')
