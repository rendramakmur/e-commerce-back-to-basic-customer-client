import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'
import Swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    banners: [],
    carts: []
  },
  mutations: {
    CHANGE_IS_LOGIN (state, payload) {
      state.isLogin = payload
    },
    CHANGE_PRODUCTS (state, payload) {
      state.products = payload
    },
    CHANGE_BANNERS (state, payload) {
      state.banners = payload
    },
    CHANGE_CARTS (state, payload) {
      state.carts = payload
    }
  },
  actions: {
    login (context, payload) {
      axios.post('/login', payload)
        .then(({ data }) => {
          localStorage.access_token = data.access_token
          context.commit('CHANGE_IS_LOGIN', true)
          router.push('/')
        })
        .catch(err => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'error',
            title: err.response.data.message
          })
        })
    },
    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'success',
            title: `Register success, welcome ${data.full_name}`
          })
          router.push('/login')
        })
        .catch(err => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'error',
            title: err.response.data.errors.join('\n')
          })
        })
    },
    fetchProducts (context, payload) {
      axios.get('/products', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('CHANGE_PRODUCTS', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchBanners (context, payload) {
      axios.get('/banners', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('CHANGE_BANNERS', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    fetchCarts (context, payload) {
      axios.get('/carts', {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          context.commit('CHANGE_CARTS', data)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    changeQuantity (context, payload) {
      axios.patch('/carts/' + payload.cartId, {
        quantity: payload.quantity
      }, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'success',
            title: `Quantity is changed to ${data.quantity}`
          })
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    removeCart (context, payload) {
      axios.delete('/carts/' + payload, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'success',
            title: data.message
          })
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    addCart (context, payload) {
      axios.post('/carts/' + payload, {}, {
        headers: {
          access_token: localStorage.access_token
        }
      })
        .then(({ data }) => {
          Swal.fire({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            width: 400,
            timer: 2500,
            timerProgressBar: true,
            icon: 'success',
            title: 'Item success added on your cart'
          })
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          if (localStorage.access_token) {
            Swal.fire({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              width: 400,
              timer: 2500,
              timerProgressBar: true,
              icon: 'error',
              title: err.response.data.message
            })
          } else {
            router.push('/login')
            Swal.fire({
              toast: true,
              position: 'top',
              showConfirmButton: false,
              width: 400,
              timer: 2500,
              timerProgressBar: true,
              title: 'Please login first'
            })
          }
        })
    }
  }
})
