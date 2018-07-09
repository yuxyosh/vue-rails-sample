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
        <th width="60px">delete</th>
      <tr>
      <tr v-for="user in userList" :key="user.id">
        <th>{{user.id}}</th>
        <th>{{user.name}}</th>
        <th>{{user.email}}</th>
        <th>{{user.age}}</th>
        <th><router-link :to="{ name: 'User', params: { id: user.id } }">link</router-link></th>
        <th><button @click="deleteUser(user.id)">delete</button></th>
      </tr>
    </table>
    <div>
      <button @click="showForm = true">New User</button>
    </div>
    <modal v-if="showForm" @close="showForm = false">
      <h3 slot="header">新規登録</h3>
      <div slot="body">
        <user-form :cancel-button="true" @submit="createUser" @cancel="showForm = false"></user-form>
      </div>
      <div slot="footer">
      </div>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserService from '@/services/user-service'
import Modal from './parts/modal'
import UserForm from './parts/user-form'

export default {
  name: 'Users',
  components: {
    'modal': Modal,
    'user-form': UserForm
  },
  data () {
    return {
      showForm: false
    }
  },
  created: function () {
    this.userService = new UserService()
    this.userService.setupUserList()
  },
  computed: {
    ...mapGetters([
      'userList'
    ]),
    count: function () { return this.userList.length }
  },
  methods: {
    createUser: function (user) {
      this.userService.createUser(user)
      this.showForm = false
    },
    deleteUser: function (id) {
      this.userService.deleteUser(id)
    }
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
