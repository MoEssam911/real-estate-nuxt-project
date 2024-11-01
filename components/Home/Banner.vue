<template>
  <div class="flex flex-col md:flex-row h-2/3 relative">
    <!-- Left Side: Title, Text, and Buttons -->
    <div class="flex flex-col justify-center w-full md:w-1/2 p-6 sm:mt-20 md:p-10 pt-14 order-2 md:order-1 space-y-[40px] md:space-y-[50px]">
      <!-- header text -->
      <div>
        <h1 class="text-[28px] md:text-[46px] lg:text-[60px] font-semibold text-white pr-9">
          Discover Your Dream Property with Estatein
        </h1>
        <p class="text-md md:text-lg text-grey60">
          Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
        </p>
      </div>
      <!-- Buttons -->
      <div v-if="showButtons" class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
        <button class="btn border border-grey15 w-full sm:w-auto">Read More</button>
        <button class="btn bg-purple60 w-full sm:w-auto">Browse Properties</button>
      </div>

      <!-- Cards Row -->
      <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div class="flex flex-col items-center bg-grey10 border-2 border-grey15 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-white">200+</h2>
          <p class="text-grey60">Happy Customers</p>
        </div>
        <div class="flex flex-col items-center bg-grey10 border-2 border-grey15 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-white">10k+</h2>
          <p class="text-grey60">Properties for Clients</p>
        </div>
        <div class="flex flex-col items-center bg-grey10 border-2 col-span-2 border-grey15 p-6 rounded-lg shadow-lg sm:col-span-2 md:col-span-1">
          <h2 class="text-2xl font-bold text-white">16+</h2>
          <p class="text-grey60">Years of Expertise</p>
        </div>
      </div>
    </div>

    <!-- Centered SVG -->
    <div class="absolute md:top-40 md:left-[46.5%] top-80 sm:left-0 pb-4 flex items-center justify-center z-10">
      <img src="~/assets/images/icons/watermark.svg" class="w-[105px] h-[105px]" />
    </div>

    <!-- Right Side: Image -->
    <div class="w-full md:w-1/2 z-0 order-1 md:order-2">
      <img :src="image" alt="Banner Image" class="object-cover h-full w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    showButtons: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
/* Custom Styles */
</style>
