<template>
  <div class="flex items-center justify-between py-5 px-40 bg-grey10">
    <img class="text-red" src="../../assets/images/logo/Logo.svg" />

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

    <nuxt-link to="/contact" class="active-link text-white hover:text-gray-300"
      >Contact Us</nuxt-link
    >
  </div>
</template>
