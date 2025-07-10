<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import SectionTitle from './SectionTitle.vue';

const projects = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/projects');
    projects.value = response.data;
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <section id="proyek" class="py-20 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600">
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-lg shadow-md border border-blue-700 overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] cursor-pointer"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-blue-900 mb-2 transition-colors duration-300 hover:text-blue-800">
              {{ project.title }}
            </h3>
            <p class="text-blue-800 mb-4 transition-colors duration-300 hover:text-blue-900">
              {{ project.description }}
            </p>
            <div class="mb-4">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="inline-block bg-blue-300 text-blue-900 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded-full transition-colors duration-300 hover:bg-blue-400 hover:text-blue-950"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-700 font-semibold hover:underline hover:text-blue-900 transition-colors duration-300"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
