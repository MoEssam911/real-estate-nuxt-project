<template>
  <div class="bg-grey8 p-7 border border-grey15 rounded-xl">
    <div>
      <img
        class="w-full 3xl:h-80 lg:h-64 h-52 object-cover rounded-[10px]"
        :src="property.image"
        alt="property image"
      />
    </div>

    <h4 class="3xl:mt-7 lg:mt-5 mt-4 3xl:text-2xl lg:text-xl text-lg">
      {{ property.title }}
    </h4>

    <p class="text-grey60 3xl:text-lg lg:text-base text-sm">
      {{ property.description }}
    </p>

    <!-- card properties -->
    <div class="flex gap-1.5 mt-5">
      <div class="flex gap-1 py-1.5 px-3.5 border border-grey15 rounded-3xl">
        <div>
          <img src="~/assets/images/icons/bedroom.svg" alt="bedroom" />
        </div>
        <p class="3xl:text-lg text-sm">4-Bedroom</p>
      </div>

      <div class="flex gap-1 py-1.5 px-3.5 border border-grey15 rounded-3xl">
        <div>
          <img src="~/assets/images/icons/bath.svg" alt="bath" />
        </div>
        <p class="3xl:text-lg text-sm">3-Bathroom</p>
      </div>

      <div class="flex gap-1 py-1.5 px-3.5 border border-grey15 rounded-3xl">
        <div>
          <img src="~/assets/images/icons/villa.svg" alt="villa" />
        </div>
        <p class="3xl:text-lg text-sm">Villa</p>
      </div>
    </div>

    <div class="flex justify-between items-center mt-5">
      <div>
        <p class="3xl:text-lg text-sm text-grey60">Price</p>
        <p class="3xl:text-2xl lg:text-xl text-lg">$550,000</p>
      </div>
      <div>
        <div class="btn bg-purple60">View Property Details</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  property: {
    type: Object,
    required: true,
  },
});
</script>
