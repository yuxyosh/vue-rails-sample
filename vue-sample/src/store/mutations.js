export const types = {
  GET_USER_LIST: 'GET_USER_LIST',
  GET_ORGANIZATION_LIST: 'GET_ORGANIZATION_LIST'
}

export const mutations = {
  [types.GET_USER_LIST] (state, userList) {
    state.userList = userList
  },
  [types.GET_ORGANIZATION_LIST] (state, organizationList) {
    state.organizationList = organizationList
  }
}
