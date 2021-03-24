<template>
  <div id="carousel" style="margin-top: 60px;">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/16/b0d76433-0a53-426c-b081-a8bdb8f6dd1f.jpg" class="d-block w-100">
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
