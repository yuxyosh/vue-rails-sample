export const types = {
  GET_USER_LIST: 'GET_USER_LIST'
}

export const mutations = {
  [types.GET_USER_LIST] (state, userList) {
    state.userList = userList
  }
}
