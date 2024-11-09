<template>
  <div>
    <main class="min-h-screen">
      <section>
        <Banner
          title="Welcome to Our Website"
          image="/banners/home.svg"
          text="Discover amazing properties and get the best deals!"
          :showButtons="true"
        />
      </section>

      <!-- properties section -->
      <section class="container mt-20">
        <div class="flex justify-between items-center">
          <SectionTitle
            :title="propertiesSection.title"
            :subTitle="propertiesSection.subTitle"
          />
        </div>
        <div class="flex gap-5 mt-10">
          <div v-for="(prop, index) in properties.slice(0, 3)" :key="index">
            <PropertyCard :property="prop" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { properties } from "../properties.json";

const propertiesSection = ref({
  title: "Featured Properties",
  subTitle:
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click "View Details" for more information.',
});
</script>
