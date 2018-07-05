import store from '@/store'
import { Api } from '@/api'

export default class UserService {
  constructor () {
    this.usersStored = false
  }

  setupUsers () {
    if (store.getters.userList.length !== 0) {
      this.usersStored = true
    } else {
      store.dispatch('getUserList').then(() => { this.usersStored = true })
    }
  }

  async setupUser (id) {
    await store.dispatch('getUser', {id: id})
    return store.getters.currentUser
  }

  async editUser (id, user) {
    await Api.editUser(id, {body: user})
    await store.dispatch('getUser', {id: id})
    return store.getters.currentUser
  }
}
