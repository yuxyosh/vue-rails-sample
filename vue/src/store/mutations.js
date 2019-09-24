export const types = {
  SET_USERS: 'SET_USERS',
  SET_USER: 'SET_USER',
  SET_ORGANIZATIONS: 'SET_ORGANIZATIONS',
  SET_ORGANIZATION: 'SET_ORGANIZATION'
}

export const mutations = {
  [types.SET_USERS] (state, users) {
    state.users = users
  },
  [types.SET_USER] (state, user) {
    state.user = user
  },
  [types.SET_ORGANIZATIONS] (state, organizations) {
    state.organizations = organizations
  },
  [types.SET_ORGANIZATION] (state, organization) {
    state.organization = organization
  }
}
