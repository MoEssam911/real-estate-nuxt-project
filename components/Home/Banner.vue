<template>
  <div class="flex flex-col md:flex-row h-2/3 relative" >
    <!-- Left Side: Title, Text, and Buttons -->
    <div class="flex flex-col justify-center w-full md:w-1/2 p-6 sm:mt-20 md:p-10  order-2 md:order-1">
      <h1 class="text-3xl md:text-6xl font-bold mb-4 text-white">Discover Your Dream Property with Estatein</h1>
      <p class="text-md md:text-lg mb-6 text-grey60">Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.</p>
      
      <div v-if="showButtons" class="flex space-x-4 mb-6">
        <button class="btn border border-grey15">Read More</button>
        <button class= "btn bg-purple60    ">Browse Properties</button>
      </div>
      
      <!-- Cards Row -->
      <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
        <div class="flex flex-col items-center bg-grey10 border-2 border-grey15 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-white">200+</h2>
          <p class="text-grey60">Happy Customers</p>
        </div>
        <div class="flex flex-col items-center bg-grey10 border-2 border-grey15 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-white">10k+</h2>
          <p class="text-grey60">Properties for Clients</p>
        </div>
        <div class="flex flex-col items-center bg-grey10 border-2 border-grey15 p-6 rounded-lg shadow-lg">
          <h2 class="text-2xl font-bold text-white">16+</h2>
          <p class="text-grey60">Years of Expertise</p>
        </div>
      </div>
    </div>

    <!-- Centered SVG -->
    <div class="absolute md:top-40 md:left-[45%] sm:top-1/2 sm:left-0 flex items-center justify-center z-10">
      <img src="~/assets/images/icons/watermark.svg" />
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

