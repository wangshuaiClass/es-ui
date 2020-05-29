import select from './src'

export default {
  install(Vue) {
    Vue.component(select.name, select)
  }
}
