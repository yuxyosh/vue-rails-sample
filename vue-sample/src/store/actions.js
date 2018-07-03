import { types } from './mutations'
import { Api } from '@/api'

export default {
  getUserList ({commit}, args) {
    return Api.getUserList(args).then(res => {
      commit(types.GET_USER_LIST, res.data)
      return res
    }).catch(err => {
      throw err
    })
  }
}
