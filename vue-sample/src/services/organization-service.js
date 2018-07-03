import store from '@/store'

export default class OrganizationService {
  constructor () {
    this.isStored = false
  }

  init () {
    if (store.getters.organizationList.length !== 0) {
      this.isStored = true
    } else {
      store.dispatch('getOrganizationList').then(() => { this.isStored = true })
    }
  }
}
