import vuex from 'vuex'
import vue from 'vue'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

vue.use(vuex)

const state = {
  homeCurrentIndex: 0,
  detailCurrentIndex: 0,
  cart: []
}

const store = new vuex.Store({
  state,
  actions,
  mutations,
  getters
})

export default store