<template>
  <div id="Carts" style="margin-top: 120px;">
    <h1 class="text-center my-5">Carts</h1>
    <div class="container-fluid my-5">
      <div class="row">

        <!-- Start Carts Column Container -->
        <div class="col-sm-6 overflow-auto" style="height: 100vh;">
          <CartCard></CartCard>
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
import CartCard from '../components/CartCard'

export default {
  name: 'Cart Page',
  components: {
    CartCard
  }
}
</script>

<style>

</style>
