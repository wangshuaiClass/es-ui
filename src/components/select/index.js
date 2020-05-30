import select from './src/select'

export default {
  install(Vue) {
    Vue.component(select.name, select)
  }
}
