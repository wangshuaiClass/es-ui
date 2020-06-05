import dialog from './src'

export default {
  install(Vue) {
    Vue.component(dialog.name, dialog)
  }
}
