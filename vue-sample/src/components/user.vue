<template>
  <div>
    <form v-if="user" v-on:submit.prevent="editUser">
      <div>
        <label for="user_name">Name</label>
        <input type="text" id="user_name" v-model="user.name">
      </div>
      <div>
        <label for="user_email">Email</label>
        <input type="text" id="user_email" v-model="user.email">
      </div>
      <div>
        <label for="user_age">Age</label>
        <input type="text" id="user_age" v-model="user.age">
      </div>
      <button type="submit">送信</button>
    </form>
  </div>
</template>

<script>
import UserService from '@/services/user-service'

export default {
  name: 'User',
  props: {
    id: Number
  },
  data () {
    return {
      user: null
    }
  },
  created: function () {
    this.userService = new UserService()
    this.userService.setupUser(this.id).then((user) => {
      this.user = Object.assign({}, user) // NOTICE: not deep copy
    })
  },
  methods: {
    editUser: function () {
      this.userService.editUser(this.id, this.user).then((user) => {
        alert('成功しました!')
        console.log(user)
      })
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
