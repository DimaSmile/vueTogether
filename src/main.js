import Vue from 'vue'
import App from './App.vue'
import {router} from './router.js'
Vue.config.productionTip = false


//Глобальный компонент:
// Vue.component('greetings',{
//     data: function() {
//         return {
//             name: 'Dima'
//         }
//     },
//     methods: {
//         changeName() {
//             this.name = this.name == 'Dima'? 'Julia' : 'Dima'
//         }
//     },
//     template: '<h1>Hello {{ name }}!!!<button @click="changeName">Not {{ name }}?</button></h1>'
// })


//локальный компонент:
// var greetings = {
//     data: function() {
//         return {
//             name: 'Dima'
//         }
//     },
//     methods: {
//         changeName() {
//             this.name = this.name == 'Dima'? 'Julia' : 'Dima'
//         }
//     },
//     template: '<h1>Hello {{ name }}!!!<button @click="changeName">Not {{ name }}?</button></h1>'
// }


//глобальные фильтры созадються перед созданием экземпляра Vue
Vue.filter('global', function (value) {
    if (!value) return ''
    value = value.toString()
    console.log('global filter'.toUpperCase());
    
    return value.toUpperCase()
})

new Vue({
    router,
    render: h => h(App),

//локальный компонент:
    // components: {
    //   greetings // или если хотим поменять имя 'my-greetings': greetings - тогда обращаться так <my-greetings></my-greetings>
    // },
//###############################
    // template: '<div><greetings></greetings><greetings></greetings></div>'
}).$mount('#app')
