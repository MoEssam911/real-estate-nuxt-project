<template>
  <header class="bg-grey10">
    <div class="container py-5 w-full">
      <div class="flex items-center justify-between">
        <nuxt-link to="/">
          <img class="text-red" src="~/assets/images/logo/Logo.svg" />
        </nuxt-link>

        <div class="flex items-center gap-8">
          <nuxt-link
            to="/"
            class="text-white text-lg hover:text-gray-300"
            :class="{ 'active-link': $route.path === '/' }"
          >
            Home
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="text-white text-lg hover:text-gray-300"
            :class="{ 'active-link': $route.path === '/about' }"
          >
            About Us
          </nuxt-link>
          <nuxt-link
            to="/properties"
            class="text-white text-lg hover:text-gray-300"
            :class="{ 'active-link': $route.path === '/properties' }"
          >
            Properties
          </nuxt-link>
          <nuxt-link
            to="/services"
            class="text-white text-lg hover:text-gray-300"
            :class="{ 'active-link': $route.path === '/services' }"
          >
            Services
          </nuxt-link>
        </div>

        <nuxt-link
          to="/contact"
          class="active-link text-white hover:text-gray-300"
          >Contact Us</nuxt-link
        >
      </div>
    </div>
  </header>
</template>

<script setup>

</script>
