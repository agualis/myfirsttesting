import Vue from 'vue'
import { registerGlobalComponents } from './GlobalComponentsLoader'
Vue.config.productionTip = false

registerGlobalComponents()
