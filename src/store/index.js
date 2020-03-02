import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        dark_mode: false,
        dark_icon: "mdi-moon-waning-crescent",
    },
    mutations: {
        change_dark_mode(state) {
            state.dark_mode = !state.dark_mode;
            if (state.dark_icon == "mdi-white-balance-sunny") {
                state.dark_icon = "mdi-moon-waning-crescent";
            } else {
                state.dark_icon = "mdi-white-balance-sunny";
            }
        },
    },
    actions: {},
    modules: {}
})