<template>
  <div>
    <h1>計{{ count }}人</h1>
      <table align="center" border="1px" bordercolor="#333333">
      <tr>
        <th width="40px">id</th>
        <th width="100px">name</th>
        <th width="200px">email</th>
        <th width="100px">age</th>
        <th width="100px">link</th>
      <tr>
      <tr v-for="user in userList" :key="user.id">
        <th>{{user.id}}</th>
        <th>{{user.name}}</th>
        <th>{{user.email}}</th>
        <th>{{user.age}}</th>
        <th><router-link :to="{ name: 'User', params: { id: user.id } }">link</router-link></th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserService from '@/services/user-service'

export default {
  name: 'Users',
  data () {
    return {
    }
  },
  created: function () {
    let userService = new UserService()
    userService.setupUsers()
  },
  computed: {
    ...mapGetters([
      'userList'
    ]),
    count: function () { return this.userList.length }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
