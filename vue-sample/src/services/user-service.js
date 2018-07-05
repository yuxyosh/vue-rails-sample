import store from '@/store'
import { Api } from '@/api'

export default class UserService {
  constructor () {
    console.log('New UserService')
  }

  async setupUserList () {
    if (store.getters.userList.length === 0) {
      store.dispatch('getUserList')
    }
  }

  async getUser (id) {
    await store.dispatch('getUser', {id: id})
    return store.getters.currentUser
  }

  async updateUser (id, user) {
    await Api.updateUser({id: id, body: user})
    const updatedUser = await this.getUser(id)
    store.dispatch('getUserList')
    return updatedUser
  }
}
