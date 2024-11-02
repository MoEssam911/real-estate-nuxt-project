<template>
  <div class="p-5 bg-grey10">
    <div class="flex items-center justify-between lg:justify-around">
      <!-- Logo -->
      <img class="w-20 h-20" src="../../assets/images/logo/Logo.svg" />

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex space-x-14">
        <h2 class="text-white">Home</h2>
        <h2 class="text-white">About Us</h2>
        <h2 class="text-white">Properties</h2>
        <h2 class="text-white">Services</h2>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="isOpen = !isOpen" class="lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      <!-- Contact and Theme Switcher (visible on larger screens) -->
      <div class="hidden lg:flex space-x-3 items-center">
        <button class="text-white bg-black border-2 border-grey15 px-4 py-2">
          Contact Us
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="isOpen" class="lg:hidden mt-4  space-y-4">
      <h2 class="text-white px-4">Home</h2>
      <h2 class="text-white px-4">About Us</h2>
      <h2 class="text-white px-4">Properties</h2>
      <h2 class="text-white px-4">Services</h2>
      <button class="text-white bg-black border-2 border-grey15 px-4 py-2">
        Contact Us
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false, // Toggle for mobile menu
    };
  },
};
</script>

<style scoped>
/* Custom Styles */
</style>
