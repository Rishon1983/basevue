// initial state
// import mainData from "@/api/mainData";
import axios from "axios";

const state = {
    userName: '',
    login: false,
    logsData: []
};

// getters are functions.
const getters = {};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {


    /*settingsAction({commit}, data) {

        data.userId = localStorage.getItem('userId');
        axios.defaults.headers.common['Authorization'] = `Bearer ` + localStorage.getItem('token');
        axios.post('http://localhost:80/api/v1/cymulateSettings', data).then(res => {
            commit(data.action + 'Settings', res.data.result);
        })

        /!*!//this is example for fetch function (JS)
        const headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        };
        const sendData = {
            headers: headers,
            method: 'POST',
            body: data.settingsId
        };
        fetch('/api/v1/' + data.action + 'CymulateSettings', sendData).then(res => {
            console.log(res);
            commit(data.action + 'Settings', res);
        })*!/
    },*/
    getLogs({commit}, data) {
        axios.post('http://localhost:80/api/v1/getLogs', data).then(res => {
            commit('getLogs', res.data.result);
        })
    },
    loginClient({commit}, data) {
        axios.post('http://localhost:80/api/v1/login', data).then(res => {
            commit('login', res.data.result);
        })
    }
};
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    getLogs(state, res) {
        state.logsData = res.logsData;
    },
    login(state, res) {
        if (res.login) {
            state.userName = res.login.username;
            state.login = true;
        }
    }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}