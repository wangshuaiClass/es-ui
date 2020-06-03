import Vue from 'vue'
import button from '@/components/button'
import select from '@/components/select'
import option from '../components/select/option'
import message from '../components/confirm'

Vue.use(button)
Vue.use(select)
Vue.use(option)

Vue.prototype.$message = message
