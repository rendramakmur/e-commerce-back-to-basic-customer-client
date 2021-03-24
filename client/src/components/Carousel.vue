<template>
  <div id="carousel" style="margin-top: 60px;">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <!-- Carousel Item -->
        <div class="carousel-item active">
          <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/22/37bd438a-56d4-40e4-afbd-b137c11e1622.jpg" class="d-block w-100">
        </div>
        <!-- Carousel Item -->

        <div class="carousel-item">
          <img src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2021/3/22/5edd6400-b4a3-46d0-85f2-aed21aa03e43.jpg" class="d-block w-100">
        </div>

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
export default {
  name: 'Carousel'
}
</script>

<style>

</style>
