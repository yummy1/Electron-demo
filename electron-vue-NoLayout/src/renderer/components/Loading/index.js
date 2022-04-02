import Vue from 'vue'
import CusLoading from './loading.vue'

const Loading = Vue.extend(CusLoading)

CusLoading.install = function(options) {
    // console.log('options', options)
        /**
         * options的其他情况自行判断添加默认值等等
         */
    let str = '伦家正在努力的整理数据哦 (〃▽〃)'
    if (options === undefined || options === null) {
        options = {
            flag: true,
            iconFlag: true,
            txtFlag: true,
            title: str
        }
    } else if (typeof options === 'string') {
        options = {
            flag: true,
            iconFlag: true,
            txtFlag: true,
            title: options
        }
    } else {
        options = {
            flag: options.flag !== undefined ? options.flag : true,
            iconFlag: options.iconFlag !== undefined ? options.iconFlag : true,
            txtFlag: options.txtFlag !== undefined ? options.txtFlag : true,
            title: options.title !== undefined ? options.title : str
        }
    }

    let instance = new Loading({
        data: options
    }).$mount()

    if (options.target) {
        options.target.appendChild(instance.$el)
    } else {
        document.body.appendChild(instance.$el)
    }
    return instance // 返回当前实例
}

export default CusLoading

