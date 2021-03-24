<template>
  <nav id="navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow">
      <div class="container-fluid mx-4">
        <a class="navbar-brand bold" href="#">BTB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <div class="ms-auto">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#"><img class="mb-2 mx-1" src="../assets/cart2.svg" alt="Bootstrap" width="18" height="18">Shop</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"><img class="mb-2 mx-1" src="../assets/bag.svg" alt="Bootstrap" width="18" height="18">Carts</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <img class="mb-2 mx-1" src="../assets/person.svg" alt="Bootstrap" width="20" height="20">
                </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Login</a></li>
                  <li><a class="dropdown-item" href="#">Logout</a></li>
                  <li><a class="dropdown-item" href="#">Register</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>

</style>
