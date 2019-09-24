<template>
  <div class="hello">
    <h1>計{{ count }}組織</h1>
      <table align="center" border="1px" bordercolor="#333333">
      <tr>
        <th width="40px">id</th>
        <th width="200px">name</th>
        <th width="200px">location</th>
        <th width="100px">link</th>
      <tr>
      <tr v-for="organization in organizationList" :key="organization.id">
        <th>{{organization.id}}</th>
        <th>{{organization.name}}</th>
        <th>{{organization.location}}</th>
        <th>link</th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Organization',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'organizations'
    ]),
    count () { return this.organizationList.length }
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
