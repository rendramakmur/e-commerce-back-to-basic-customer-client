<template>
  <div class="home">
    <Carousel></Carousel>
    <div id="products">
      <h1 class="text-center my-5">Products</h1>
      <div class="container-fluid my-5">
        <div class="row d-flex justify-content-center">

          <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'

export default {
  name: 'Shop',
  components: {
    Carousel,
    ProductCard
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    },
    fetchBanners () {
      this.$store.dispatch('fetchBanners')
    }
  },
  created () {
    this.fetchProducts()
    this.fetchBanners()
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>
