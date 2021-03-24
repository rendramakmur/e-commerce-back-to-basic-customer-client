<template>
  <div id="Register" style="margin-top: 60px;">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center" style="height: 100vh;">
        <div class="col-sm-4">
          <div class="col-12">
            <div class="card shadow mx-5">
              <div class="card-body">
                <h3 class="text-center my-3">Register</h3>

                <div class="col-8 offset-2">
                  <label for="name" class="very-small-text">Full name</label>
                  <input class="form-control form-control-dm mb-3" id="name" type="text" placeholder="Full name" v-model="full_name">
                </div>

                <div class="col-8 offset-2">
                  <label for="email" class="very-small-text">Email</label>
                  <input class="form-control form-control-dm mb-3" id="email" type="email" placeholder="Email" v-model="email">
                </div>

                <div class="col-8 offset-2">
                  <label for="password" class="very-small-text">Password</label>
                  <input class="form-control form-control-dm mb-3" id="password" type="password" placeholder="Password" v-model="password">
                </div>

                <div class="d-flex justify-content-center my-4">
                  <a href="#" class="medium-btn shadow" @click.prevent="register">Register</a>
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
  name: 'Register',
  data () {
    return {
      full_name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register () {
      const newUser = {
        full_name: this.full_name,
        email: this.email,
        password: this.password
      }
      this.$store.dispatch('register', newUser)
      this.full_name = ''
      this.email = ''
      this.password = ''
    }
  }
}
</script>

<style>

</style>
