<template>
  <div id="carousel" style="margin-top: 60px;">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://firebasestorage.googleapis.com/v0/b/backtobasic-ecommerce.appspot.com/o/BTB-Welcome-Banner.jpg?alt=media&token=a6c79439-d49b-41b8-bebf-9b022c5ea80a" class="d-block w-100">
        </div>
        <Banner v-for="banner in filterActiveBanners" :key="banner.id" :banner="banner"></Banner>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Banner from '../components/Banner.vue'

export default {
  name: 'Carousel',
  computed: {
    ...mapState(['banners']),
    filterActiveBanners () {
      return this.banners.filter(banner => banner.status === true)
    }
  },
  components: {
    Banner
  }
}
</script>

<style>

</style>
