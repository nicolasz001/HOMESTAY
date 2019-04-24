import Vue from 'vue'
import Vuex from 'vuex'
import pathify from 'vuex-pathify';  
Vue.use(Vuex)

const modules = {
   
}

export default new Vuex.Store({
    plugins: [pathify.plugin],
    modules : modules
})
