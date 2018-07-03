import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/users'
import Organizations from '@/components/organizations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Users',
      component: Users
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: Organizations
    }
  ]
})
