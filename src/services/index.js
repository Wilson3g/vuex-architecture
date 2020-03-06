import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export const getUsersData = () => {
    return Vue.http.get('https://api.github.com/users{/user}');
}