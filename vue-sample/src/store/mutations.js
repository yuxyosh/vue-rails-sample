export const types = {
  GET_USER_LIST: 'GET_USER_LIST',
  GET_USER: 'GET_USER',
  GET_ORGANIZATION_LIST: 'GET_ORGANIZATION_LIST',
  GET_ORGANIZATION: 'GET_ORGANIZATION'
}

export const mutations = {
  [types.GET_USER_LIST] (state, userList) {
    state.userList = userList
  },
  [types.GET_USER] (state, user) {
    state.currentUser = user
  },
  [types.GET_ORGANIZATION_LIST] (state, organizationList) {
    state.organizationList = organizationList
  },
  [types.GET_ORGANIZATION] (state, organization) {
    state.currentOrganization = organization
  }
}
