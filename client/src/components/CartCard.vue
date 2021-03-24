<template>
  <div class="card mb-3 mx-5 shadow card-product" style="max-width: 32rem; margin: 0 20px;">
    <div class="row">
      <div class="col-4">
        <img :src="cart.Product.image_url" class="card-img my-3 mx-3">
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title text-center">{{ cart.Product.name }}</h5>
          <div class="text-center">
            <p class="very-small-text">Total Price: {{ convertToRupiah(computeTotalPrice) }}</p>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <select class="form-select form-select-sm" style="width: 10rem;" v-model="quantity">
              <option v-for="n in cart.Product.stock" :key="n" :value="n">{{ n }}</option>
            </select>
          </div>
          <div class="d-flex justify-content-center">
            <div class="row col-sm-7">
              <a href="#" class="small-btn shadow text-center mb-2" @click.prevent="submitQuantity">
                Submit Quantity
              </a>
              <a href="#" class="small-btn shadow text-center" @click.prevent="removeCart">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
                Remove from cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartCard',
  props: ['cart'],
  data () {
    return {
      quantity: this.cart.quantity,
      totalPrice: this.cart.Product.price
    }
  },
  methods: {
    calculateTotalPrice () {
      this.totalPrice = this.quantity * this.cart.Product.price
    },
    submitQuantity () {
      const payload = {
        cartId: this.cart.id,
        quantity: this.quantity
      }
      this.$store.dispatch('changeQuantity', payload)
    },
    removeCart () {
      const cartId = this.cart.id
      this.$store.dispatch('removeCart', cartId)
    },
    convertToRupiah (price) {
      var rupiah = ''
      var angkarev = price.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  },
  computed: {
    computeTotalPrice () {
      this.calculateTotalPrice()
      return this.totalPrice
    }
  }
}
</script>

<style>

</style>
