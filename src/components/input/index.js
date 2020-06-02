import input from './src'

export default {
  install(Vue) {
    Vue.component(input.name, input)
  }
}