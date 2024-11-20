<template>
    <header>
      <nav class="navbar navbar-expand-lg custom-navbar-bg">
        <div class="container-fluid">
          <RouterLink to="/" class="navbar-brand">
            <img :src="logo" alt="Logo" height="30" />
          </RouterLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto d-flex">
              <RouterLink to="/movies" class="nav-link" active-class="active-tab"
                >영화조회</RouterLink
              >
              <!-- <RouterLink to="/review-search" class="nav-link" active-class="active-tab"
                >리뷰검색</RouterLink
              > -->
              <!-- <RouterLink to="/recommended" class="nav-link" active-class="active-tab"
                >영화추천</RouterLink
              > -->
            </div>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import logoSrc from '@/assets/image.png'
  
  const logo = ref(logoSrc)
  </script>
  
  <style scoped>
  .custom-navbar-bg {
    background-color: rgb(202, 214, 218) !important;
  }
  
  .active-tab {
    color: green !important;
    font-weight: bold !important;
  }
  </style>
  