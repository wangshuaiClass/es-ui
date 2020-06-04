import Vue from 'vue'
import button from '@/components/button'
import input from '@/components/input'
import select from '@/components/select'
import option from '../components/select/option'
<<<<<<< HEAD
Vue.use(input)
=======
import message from '../components/confirm'

>>>>>>> 4b40265a3d6e32b7265821e33194db2ea733b804
Vue.use(button)
Vue.use(select)
Vue.use(option)

Vue.prototype.$message = message
