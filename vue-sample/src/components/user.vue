<template>
  <div>
    <form v-if="user" v-on:submit.prevent="updateUser">
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
        <input type="number" id="user_age" v-model.number="user.age">
      </div>
      <button type="submit">送信</button>
    </form>
    <modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">編集</h3>
      <p slot="body">変更しました</p>
    </modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserService from '@/services/user-service'
import Modal from './parts/modal'

export default {
  name: 'User',
  components: {
    'modal': Modal
  },
  props: {
    id: Number
  },
  data () {
    return {
      user: null,
      showModal: false
    }
  },
  created: function () {
    this.userService = new UserService()
    this.userService.getUser(this.id).then((user) => {
      this.user = Object.assign({}, user) // NOTICE: not deep copy
    })
  },
  computed: {
    ...mapGetters([])
  },
  methods: {
    updateUser: function () {
      this.userService.updateUser(this.id, this.user).then(() => {
        this.showModal = true
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
