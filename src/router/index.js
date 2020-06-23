import Vue from 'vue'
import VueRouter from 'vue-router'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'
import PageThree from '../views/PageThree'
import Crud from '../views/Crud'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'PageOne',
    component: PageOne
  },
  {
    path: '/2',
    name: 'PageTwo',
    component: PageTwo
  },
  {
    path: '/3',
    name: 'PageThree',
    component: PageThree
  },
  {
    path: '/crud',
    name: 'Crud',
    component: Crud
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
