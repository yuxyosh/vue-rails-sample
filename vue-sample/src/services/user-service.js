import store from '@/store'

export default class UserService {
  constructor () {
    this.isStored = false
  }

  init () {
    if (store.getters.userList.length !== 0) {
      this.isStored = true
    } else {
      store.dispatch('getUserList').then(() => { this.isStored = true })
    }
  }
}
