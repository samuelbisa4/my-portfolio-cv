<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const skills = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/skills');
    skills.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="skill" class="py-20 bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300">
    <div class="container mx-auto px-6">
      <SectionTitle title="Keahlian & Teknologi" />
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mt-6">
        <div
          v-for="skill in skills"
          :key="skill.name"
          class="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg shadow-blue-200 text-center transform hover:-translate-y-2 transition-transform duration-300 border border-blue-300"
        >
          <h3 class="text-xl font-bold text-blue-800">{{ skill.name }}</h3>
          <p class="text-blue-600 mt-2">{{ skill.level }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
