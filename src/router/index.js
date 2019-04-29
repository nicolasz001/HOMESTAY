import Vue from 'vue'
import Router from 'vue-router'
 
 

 
 
 

  
 

Vue.use(Router)
 

function loadView(view) {
    return () => import(`../views/${view}.vue`)
}

      
export default new Router({
 
    routes: [
        {
            path: '/test',
            name: 'home',
            component: loadView('test')
             
        }  ,
        {
            path: '/     datepicker',
            name: '     datepicker',
            component: loadView('  datepicker')
             
        }  ,
        
    
        {
            path: '/home',
            name: 'home',
            component: loadView('Home')
             
        }  ,
        
        {
            path: '/login',
            name: 'login',
            component: loadView('login')
             
        }  ,
        {
            path: '/detail',
            name: 'detail',
            component: loadView('detail')
             
        }  ,
        {
            path: '/graph',
            name: 'graph',
            component: loadView('graph')
             
        }  ,
     
             
       
         
     
       
    ]
    
})
