// You still need to register Vuetify itself
// src/plugins/vuetify.js

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'


export default {
    install(Vue) {
        Vue.use(Vuetify)
    }
};
