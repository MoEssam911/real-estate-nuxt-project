<template>
  <div class="lg:w-5/6">
    <img src="~/assets/images/icons/title.svg" alt="title" />

    <h3
      class="3xl:text-5xl lg:text-4xl text-2xl lg:font-semibold font-[500] mt-1.5"
    >
      {{ title }}
    </h3>
    <p class="text-grey60 lg:mt-3 mt-1.5">
      {{ subTitle }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  subTitle: {
    type: String,
    required: true,
  },
});
</script>
