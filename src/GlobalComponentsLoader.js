import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export function registerGlobalComponents() {
  Vue.component('HelloWorld', HelloWorld)

}
