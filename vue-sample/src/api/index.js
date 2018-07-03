import { ApiBase } from './base'

export const Api = {
  getUserList (args) { return ApiBase.get('/users', args) },
  getOrganizationList (args) { return ApiBase.get('/organizations', args) }
}
