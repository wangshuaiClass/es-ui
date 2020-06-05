import Vue from 'vue'
import mask from './mask.vue'
const Mask = Vue.extend(mask)

const loadingDirective = {}
loadingDirective.install = Vue => {
    const toggleLoading = (el, binding) => {
        if (binding.value) {
            Vue.nextTick(() => {
                el.originalPosition = el.style.position
                insertDom(el, el, binding)
            })
        } else {
            el.instance.showLoading = false
        }
    };
    const insertDom = (parent, el, binding) => {
        if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
            parent.style.position = 'relative'
        }
        el.instance.showLoading = binding.value
        parent.appendChild(el.mask)
    }

    Vue.directive('loading', {
        bind: function (el, binding, vnode) {
            const vm = vnode.context
            const mask = new Mask({
                el: document.createElement('div'),
                data: {}
            })
            el.instance = mask
            el.mask = mask.$el
            el.maskStyle = {}
            binding.value && toggleLoading(el, binding)
        },

        update: function (el, binding) {
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding)
            }
        },

        unbind: function (el, binding) {
            if (el.domInserted) {
                el.mask &&
                    el.mask.parentNode &&
                    el.mask.parentNode.removeChild(el.mask);
                toggleLoading(el, { value: false, modifiers: binding.modifiers })
            }
            el.instance && el.instance.$destroy()
        }
    });
};

export default loadingDirective
