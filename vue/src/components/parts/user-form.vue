<template>
  <div>
    <form v-on:submit.prevent="$emit('submit', user)">
      <div>
        <label for="user_name">Name</label>
        <input type="text" id="user_name" v-model="user.name">
      </div>
      <div>
        <label for="user_email">Email</label>
        <input type="text" id="user_email" v-model="user.email">
      </div>
      <div> <label for="user_age">Age</label>
        <input type="number" id="user_age" v-model.number="user.age">
      </div>
      <button type="submit">OK</button>
      <button v-if="cancelButton" @click.prevent="$emit('cancel')">CANCEL</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    targetUser: Object,
    cancelButton: { type: Boolean, dafult: false }
  },
  data () {
    return {
      user: null
    }
  },
  created () {
    this.reset()
  },
  watch: {
    targetUser (newUser, oldUser) {
      this.reset()
    }
  },
  methods: {
    reset () {
      this.user = Object.assign({
        name: null,
        email: null,
        age: null
      }, this.targetUser) // NOTICE: not deep copy
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
