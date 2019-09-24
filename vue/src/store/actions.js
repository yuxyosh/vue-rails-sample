import { types } from './mutations'
import { Api } from '@/api'

export default {
  async getUsers ({ commit }, args) {
    const res = await Api.getUsers(args)
    commit(types.SET_USERS, res.data)
    return res
  },
  async getUser ({ commit }, args) {
    const res = await Api.getUser(args)
    commit(types.SET_USER, res.data)
    return res
  },
  async createUserAndReloads ({ commit }, args) {
    await Api.createUser(args)
    const res = await Api.getUsers(args)
    commit(types.SET_USERS, res.data)
    return res
  },
  async updateUserAndReload ({ commit }, args) {
    await Api.updateUser(args)
    const res = await Api.getUser(args)
    commit(types.SET_USER, res.data)
    return res
  },
  async deleteUserAndReloads ({ commit }, args) {
    await Api.deleteUser(args)
    const res = await Api.getUsers(args)
    commit(types.SET_USERS, res.data)
    return res
  },
  async getOrganizations ({ commit }, args) {
    return Api.getOrganizations(args).then(res => {
      commit(types.SET_ORGANIZATIONS, res.data)
      return res
    })
  },
  async getOrganization ({ commit }, args) {
    return Api.getOrganization(args).then(res => {
      commit(types.SET_ORGANIZATION, res.data)
      return res
    })
  }
}
