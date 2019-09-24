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
import { mapGetters, mapActions } from 'vuex'
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
      showModal: false
    }
  },
  created: function () {
    this.getUser({ id: this.id })
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'getUser',
      'updateUserAndReload'
    ]),
    async updateUser (user) {
      await this.updateUserAndReload({ id: this.id, body: user })
      this.showModal = true
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
