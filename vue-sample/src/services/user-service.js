import store from '@/store'

export default class UserService {
  getUserList (args) {
    return store.dispatch('getUserList', args)
  }
}
