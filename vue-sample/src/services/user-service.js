import store from '@/store'

export default class UserService {
  constructor () {
    this.isStored = false
  }

  init () {
    if (!this.isStored && store.getters.userList.length === 0) {
      store.dispatch('getUserList').then(() => { this.isStored = true })
    }
  }
}
