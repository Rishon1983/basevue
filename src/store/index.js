import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import login from './modules/login';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        main,
        login
    },
    strict: debug
})