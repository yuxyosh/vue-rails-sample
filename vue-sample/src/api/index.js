import { ApiBase } from './base'

export const Api = {
  getUserList ({params = null, overWriteErrorHandlers = {}} = {}) {
    return ApiBase.get({ path: '/users', params: params, overWriteErrorHandlers: overWriteErrorHandlers })
  }
}
