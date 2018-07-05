import { ApiBase } from './base'

export const Api = {
  getOrganizationList (args) {
    return ApiBase.get(`/organizations`, args)
  },
  createOrganization (args) {
    return ApiBase.post(`/organizations`, args)
  },
  getOrganization (id, args) {
    return ApiBase.get(`/organizations/${id}`, args)
  },
  editOrganization (id, args) {
    return ApiBase.put(`/organizations/${id}`, args)
  },
  deleteOrganization (id, args) {
    return ApiBase.delete(`/organizations/${id}`, args)
  },

  getUserList (args) {
    return ApiBase.get(`/users`, args)
  },
  createUser (args) {
    return ApiBase.post(`/users`, args)
  },
  getUser (id, args) {
    return ApiBase.get(`/users/${id}`, args)
  },
  editUser (id, args) {
    console.log(id)
    console.log(args)
    return ApiBase.put(`/users/${id}`, args)
  },
  deleteUser (id, args) {
    return ApiBase.delete(`/users/${id}`, args)
  }
}
