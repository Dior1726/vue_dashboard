import Vue from 'vue'
import VueRouter from 'vue-router'
import MainLayout from '../layouts/Main'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: MainLayout,

    children: [
      {
        path: '',
        name: 'Home',
        component: () => import ('../views/Home')
      },
      {
        path: 'clients',
        name: 'Clients',
        component: () => import ('../views/Clients')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('../layouts/Login'),
    
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('../views/LoginPage.vue')
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isAuthenticated = store.getters.isAuthenticated

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
