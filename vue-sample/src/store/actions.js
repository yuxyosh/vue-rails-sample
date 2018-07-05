import { types } from './mutations'
import { Api } from '@/api'

export default {
  getUserList ({commit}, args) {
    return Api.getUserList(args).then(res => {
      commit(types.GET_USER_LIST, res.data)
      return res
    })
  },
  getUser ({commit}, args) {
    return Api.getUser(args.id, args).then(res => {
      commit(types.GET_USER, res.data)
      return res
    })
  },
  getOrganizationList ({commit}, args) {
    return Api.getOrganizationList(args).then(res => {
      commit(types.GET_ORGANIZATION_LIST, res.data)
      return res
    })
  },
  getOrganization ({commit}, args) {
    return Api.getOrganization(args.id, args).then(res => {
      commit(types.GET_ORGANIZATION, res.data)
      return res
    })
  }
}
