import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}


   
   
export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: loadView('Home')
        } 
    ]
    
})
