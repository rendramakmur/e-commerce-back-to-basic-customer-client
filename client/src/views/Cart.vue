<template>
  <div id="Carts" style="margin-top: 120px;">
    <h1 class="text-center my-5">Carts</h1>
    <div class="container-fluid my-5">
      <div class="row">

        <!-- Start Carts Column Container -->
        <div v-if="carts.length === 0" class="col-sm-6 overflow-auto" style="height: 100vh;">
          <router-link to="/"><h5 class="text-center">Your cart is empty, click here to start shopping.</h5></router-link>
        </div>
        <div v-else class="col-sm-6 overflow-auto" style="height: 100vh;">
          <CartCard v-for="cart in carts" :key="cart.id" :cart="cart"></CartCard>
        </div>
        <!-- End Carts Column Container -->

        <!-- Start Checkout Form Column Container-->
        <div class="col-sm-6">
          <div class="mx-3">
            <h3>Checkout Form</h3>
          </div>
        </div>
        <!-- End Checkout Form Column Container -->

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CartCard from '../components/CartCard'

export default {
  name: 'CartPage',
  components: {
    CartCard
  },
  methods: {
    fetchCarts () {
      this.$store.dispatch('fetchCarts')
    }
  },
  computed: {
    ...mapState(['carts'])
  },
  created () {
    this.fetchCarts()
  }
}
</script>

<style>

</style>
