<template>
  <div>
    <user-form :target-user="user" @submit="updateUser"></user-form>
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
import UserForm from './parts/user-form'

export default {
  name: 'User',
  components: {
    'modal': Modal,
    'user-form': UserForm
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
    updateUser: function (user) {
      this.userService.updateUser(this.id, user).then(() => {
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
