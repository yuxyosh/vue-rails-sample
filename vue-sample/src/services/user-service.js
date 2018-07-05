import store from '@/store'
import { Api } from '@/api'

export default class UserService {
  constructor () {
    console.log('New UserService')
  }

  setupUsers () {
    if (store.getters.userList.length === 0) {
      store.dispatch('getUserList')
    }
  }

  async setupUser (id) {
    await store.dispatch('getUser', {id: id})
    return store.getters.currentUser
  }

  async editUser (id, user) {
    await Api.editUser(id, {body: user})
    await store.dispatch('getUser', {id: id})
    store.dispatch('getUserList')
    return store.getters.currentUser
  }
}
