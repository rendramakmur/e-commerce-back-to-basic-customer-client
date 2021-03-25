import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shop',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (!localStorage.access_token) {
    if (to.name === 'Register') {
      next()
    } else if (to.name === 'Shop') {
      next()
    } else if (to.name !== 'Login') {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else if (localStorage.access_token) {
    if (to.name === 'Register') {
      next({ name: 'Shop' })
    } else if (to.name === 'Login') {
      next({ name: 'Shop' })
    } else {
      next()
    }
  }
})

export default router
