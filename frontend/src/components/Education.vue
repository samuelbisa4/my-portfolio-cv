<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const educationHistory = ref([]);

const API_URL = import.meta.env.PROD
  ? '/api/education'
  : 'http://localhost:3000/api/education';

onMounted(async () => {
  try {
    const { data } = await axios.get(API_URL);
    educationHistory.value = data;
  } catch (error) {
    console.error('Failed to fetch education data:', error);
  }
});
</script>

<template>
  <section
    id="pendidikan"
    class="py-20"
    style="background: linear-gradient(to bottom, #4a90e2, #6fb1fc);"
  >
    <div class="container mx-auto px-6">
      <SectionTitle
        title="Riwayat Pendidikan"
        class="text-gray-900 font-extrabold"
        style="color: #1f2937; border-color: #3b70d6;"
      />
      <div class="relative">
        <div
          class="absolute h-full border-r-2"
          style="left: 50%; border-color: #8bb7fb;"
        ></div>
        <div
          v-for="(edu, index) in educationHistory"
          :key="edu.id"
          class="mb-8 flex justify-between items-center w-full"
        >
          <div v-if="index % 2 === 0" class="w-full flex">
            <div class="w-1/2 pr-8 text-right">
              <p class="font-semibold text-white">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
              <p class="text-white opacity-70">{{ edu.major }}</p>
            </div>
            <div class="w-1/2 flex justify-start">
              <div class="w-4 h-4 bg-white rounded-full z-10"></div>
            </div>
          </div>
          <div v-else class="w-full flex">
            <div class="w-1/2 flex justify-end">
              <div class="w-4 h-4 bg-white rounded-full z-10"></div>
            </div>
            <div class="w-1/2 pl-8 text-left">
              <p class="font-semibold text-white">{{ edu.period }}</p>
              <h3 class="text-2xl font-bold text-white">{{ edu.institution }}</h3>
              <p class="text-white opacity-70">{{ edu.major }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
