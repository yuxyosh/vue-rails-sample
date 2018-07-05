import Vuex from 'vuex'
import Vue from 'vue'
import { mutations } from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state: {
    userList: [],
    currentUser: null,
    organizationList: [],
    currentOrganization: null
  },
  mutations,
  actions,
  getters,
  strict: debug
})

export default store
