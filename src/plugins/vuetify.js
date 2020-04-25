import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme:{
    primary: '#7379f0',
    success: '#70e690',
    info: '#ebed6d',
    error: '#f27481'
  }
})
