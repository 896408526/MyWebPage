import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';


import '/node_modules/bootstrap/dist/css/bootstrap.css'
import '/node_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.css'
import '/node_modules/jquery/dist/jquery.min.js'
import '/node_modules/bootstrap/dist/js/bootstrap.js'
import '/node_modules/bootstrap-switch/dist/js/bootstrap-switch.js'
import $ from "jquery"
import { type } from 'jquery'
import { data } from 'jquery'
import { error } from 'jquery'

const app = createApp(App)
app.config.globalProperties.$request = (url,method,params)=>{
    if(method=="GET"){
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: url,
                headers :{
                    "Content-Type" : "application/json"
                },
                params : params
            }).then((result)=>{
                resolve(result.data)
            }).catch((error) =>{
                console.error(error);
            }) 
                
        })
    }else{
        return new Promise((resolve, reject) => {
            axios({
                method: method,
                url: url,
                headers :{
                    "Content-Type" : "application/json"
                },
                data : params
            }).then((result)=>{
                resolve(result.data)
            }).catch((error) =>{
                console.error(error);
            }) 
                
        })
    }
    
}
    


app.use(store)
app.use(router)
app.mount('#app')



