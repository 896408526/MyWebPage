import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


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
app.config.globalProperties.$request = (url,type,data)=>{
    return new Promise((resolve, reject) => {
        $.ajax({
            url:url,
            type:type,
            data:data,
            success:(res)=>{
                resolve(res)
            },
            error:(res)=>{
                resolve(res)
            }
        })
    })
}


app.use(store)
app.use(router)
app.mount('#app')



