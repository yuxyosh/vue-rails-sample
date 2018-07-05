import { ApiBase } from './base'

export const Api = {
  getOrganizationList (args) {
    return ApiBase.get(`/organizations`, args)
  },
  createOrganization (args) {
    return ApiBase.post(`/organizations`, args)
  },
  getOrganization (args) {
    return ApiBase.get(`/organizations/${args.id}`, args)
  },
  updateOrganization (args) {
    return ApiBase.put(`/organizations/${args.id}`, args)
  },
  deleteOrganization (args) {
    return ApiBase.delete(`/organizations/${args.id}`, args)
  },

  getUserList (args) {
    return ApiBase.get(`/users`, args)
  },
  createUser (args) {
    return ApiBase.post(`/users`, args)
  },
  getUser (args) {
    return ApiBase.get(`/users/${args.id}`, args)
  },
  updateUser (args) {
    return ApiBase.put(`/users/${args.id}`, args)
  },
  deleteUser (args) {
    return ApiBase.delete(`/users/${args.id}`, args)
  }
}
