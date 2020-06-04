import Vue from 'vue'
import Main from './main.vue'
const messageInstance = Vue.extend(Main)

let instance
let instances = []

const message = (options) => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }
  const seed = zIndexRank()
  let userOnClose = options.onClose;
  let id = 'message_' + seed;

  options.onClose = () => {
    message.close(id, userOnClose);
  };
  instance = new messageInstance({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  document.body.appendChild(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;
  instance.dom.style.zIndex = seed;
  instances.push(instance);
  return instance.vm;
};

['success', 'warning'].forEach(type => {
  message[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return message(options)
  }
})

message.close = (id, userOnClose) => {
  // debugger
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);
      break;
    }
  }
};

message.closeAll = function() {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close();
  }
};

const zIndexRank = (() => {
  let i = 0
  return () => ++i
})()

export default message;