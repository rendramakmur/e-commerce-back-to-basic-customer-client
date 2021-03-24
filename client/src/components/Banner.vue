<template>
  <div class="carousel-item">
    <img :src="banner.image_url" class="d-block w-100">
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['banner']
}
</script>

<style>

</style>
