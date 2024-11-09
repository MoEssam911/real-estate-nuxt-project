<template>
  <div class="container pt-5">
    <!-- <Swiper
      :modules="[SwiperAutoplay, SwiperEffectCreative]"
      :loop="true"
      :effect="'creative'"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :creative-effect="{
        prev: {
          shadow: false,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :breakpoints="{
        640: {
          slidesPerView: 1,
          spaceBetween: 10, // Gap between slides for small screens
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20, // Gap between slides for medium screens
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30, // Gap between slides for large screens
        },
      }"
    >
      <SwiperSlide v-for="(prop, index) in properties" :key="index">
        <PropertyCard :property="prop" />
      </SwiperSlide>
    </Swiper> -->

    <div class="flex gap-5">
      <div v-for="(prop, index) in properties.slice(0, 3)" :key="index">
        <PropertyCard :property="prop" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { properties } from "../properties.json";
</script>
