<template>
  <div class="card card-product mx-3 my-3" style="width: 15rem;">
    <img :src="product.image_url" class="card-img-top my-3">
    <div class="card-body">
      <h6 class="card-title text-center">{{ product.name }}</h6>
      <p class="text-center very-small-text my-2">{{ convertToRupiah(product.price) }}</p>
      <p class="text-center very-small-text my-2" style="color: #DB382D;">{{ product.stock }} items left in stock!</p>
      <div class="row">
        <a href="#" class="small-btn shadow text-center" @click.prevent="addToCart">Add To Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: ['product'],
  methods: {
    addToCart () {
      const productId = this.product.id
      this.$store.dispatch('addCart', productId)
    },
    convertToRupiah (price) {
      var rupiah = ''
      var angkarev = price.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('')
    }
  }
}
</script>

<style>

</style>
