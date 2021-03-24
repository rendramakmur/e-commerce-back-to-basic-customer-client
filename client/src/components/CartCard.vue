<template>
  <div class="card mb-3 mx-5 shadow card-product" style="max-width: 32rem; margin: 0 20px;">
    <div class="row">
      <div class="col-4">
        <img src="https://m.media-amazon.com/images/I/61BspTROFjL._AC_SY550_.jpg" class="card-img my-3 mx-3">
      </div>
      <div class="col-8">
        <div class="card-body">
          <h5 class="card-title text-center">Card title</h5>
          <div class="text-center">
            <p class="very-small-text">Price: Rp. 575.000</p>
          </div>
          <div class="my-2 d-flex justify-content-center">
            <select class="form-select form-select-sm" style="width: 10rem;">
              <option value="">Quantity</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div class="d-flex justify-content-center">
            <div class="row col-sm-7">
              <a href="#" class="small-btn shadow text-center mb-2">
                Submit Quantity
              </a>
              <a href="#" class="small-btn shadow text-center">
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
  name: 'Cart Card'
}
</script>

<style>

</style>
