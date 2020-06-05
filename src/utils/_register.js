import Vue from 'vue'
import button from '@/components/button'
import select from '@/components/select'
import option from '../components/select/option'
import message from '../components/confirm'
import esSwitch from '../components/switch'
import dialog from '../components/dialog'

import loading from '../components/loading'

Vue.use(button)
Vue.use(select)
Vue.use(option)
Vue.use(loading)
Vue.use(esSwitch)
Vue.use(dialog)

Vue.prototype.$message = message
Vue.prototype.$loading = loading
