import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getUsersData = (user) => {
    return Vue.http.get(`https://api.github.com/users/${user}`);
}