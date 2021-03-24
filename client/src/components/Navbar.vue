<template>
  <nav id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div class="container-fluid mx-4">
        <router-link class="navbar-brand bold" to="/">BTB</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="ms-auto">
            <ul class="navbar-nav">
              <li class="nav-item" v-if="isLogin === true">
                <router-link class="nav-link" to="/"><img class="mb-2 mx-1" src="../assets/cart2.svg" alt="Bootstrap" width="18" height="18">Shop</router-link>
              </li>
              <li class="nav-item" v-if="isLogin === true">
                <router-link class="nav-link" to="/cart"><img class="mb-2 mx-1" src="../assets/bag.svg" alt="Bootstrap" width="18" height="18">Carts</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="mb-2 mx-1" src="../assets/person.svg" alt="Bootstrap" width="20" height="20">
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li v-if="isLogin === false"><router-link class="dropdown-item" to="/login">Login</router-link></li>
                  <li v-if="isLogin === true"><a class="dropdown-item" href="#" @click.prevent="logout">Logout</a></li>
                  <li v-if="isLogin === false"><router-link class="dropdown-item" to="/register">Register</router-link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState(['isLogin'])
  },
  methods: {
    logout () {
      this.$store.commit('CHANGE_IS_LOGIN', false)
      localStorage.removeItem('access_token')
      this.$router.push('/login')
    }
  },
  created () {
    if (localStorage.access_token) {
      this.$store.commit('CHANGE_IS_LOGIN', true)
    }
  }
}
</script>

<style>

</style>
