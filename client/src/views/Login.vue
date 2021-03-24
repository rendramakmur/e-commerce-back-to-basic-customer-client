<template>
  <div id="login" style="margin-top: 60px; margin-bottom: 60px">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-sm-4">
          <div class="col-12">
            <div class="my-4">
              <h1 class="text-center">Back to Basic</h1>
            </div>
            <div class="card shadow mx-5">
              <div class="card-body">
                <h3 class="text-center my-3">Login</h3>

                <div class="col-8 offset-2">
                  <label for="email" class="very-small-text">Email</label>
                  <input class="form-control form-control-dm mb-3" id="email" type="email" placeholder="Email" @keyup.enter="login" v-model="email">
                </div>

                <div class="col-8 offset-2">
                  <label for="password" class="very-small-text">Password</label>
                  <input class="form-control form-control-dm mb-3" id="password" type="password" placeholder="Password" @keyup.enter="login" v-model="password">
                </div>

                <div class="d-flex justify-content-center my-3">
                  <a href="#" class="medium-btn shadow" @click.prevent="login">Sign In</a>
                </div>

                <div class="d-flex justify-content-center my-4">
                  <router-link to="/register" class="very-small-text">Not have an account? Register here</router-link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const user = {
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('login', user)
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
