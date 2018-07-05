import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/users'
import User from '@/components/user'
import Organizations from '@/components/organizations'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'Users' }
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/user/:id(\\d+)',
      name: 'User',
      component: User,
      props: route => ({ id: Number(route.params.id) })
    },
    {
      path: '/organizations',
      name: 'Organizations',
      component: Organizations
    }
  ]
})
