import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'
import router from '../router'

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
          router.push('/')
          context.commit('CHANGE_IS_LOGIN', true)
        })
        .catch(err => {
          console.log(err.response.data)
        })
    },
    register (context, payload) {
      axios.post('/register', payload)
        .then(({ data }) => {
          // Swal success Register
          console.log(data)
          router.push('/login')
        })
        .catch(err => {
          console.log(err.response.data)
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
          console.log(context.state.carts, 'fetchCarts')
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
          // Swal success change quanitity
          console.log(data)
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
          // Swal remove item done
          console.log(data)
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
          // Swal succes add to cart
          console.log(data)
          context.dispatch('fetchCarts')
        })
        .catch(err => {
          console.log(err.response.data)
        })
    }
  }
})
