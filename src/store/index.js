import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    //header 是否显示
    visible: true,
    //主页面主要内容区导航栏是否向上平移
    top: false,
    //主页面 主要内容区域  右边广告是否隐藏
    advertisement: false
}

const actions = {}

const mutations = {
    isVisible(state, value) {
        state.visible = value
    },
    isTop(state, value) {
        state.top = value
    },
    isAdvertisement(state, value) {
        state.advertisement = value
    }
}
const getters = {}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})