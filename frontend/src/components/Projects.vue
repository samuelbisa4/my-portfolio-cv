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
  <section 
    id="proyek" 
    class="py-20 bg-gradient-to-b from-sky-500 via-sky-400 to-sky-300 min-h-[400px]"
  >
    <div class="container mx-auto px-6">
      <SectionTitle title="Proyek Unggulan" />
      <div class="grid md:grid-cols-2 gap-12">
        <div
          v-for="project in projects"
          :key="project.title"
          class="bg-white rounded-xl shadow-lg border border-sky-700 overflow-hidden transition-transform duration-300 ease-in-out
                hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.05] cursor-pointer"
        >
          <img
            :src="project.image"
            alt="Gambar Proyek"
            class="w-full h-56 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
          <div class="p-6">
            <h3 class="text-2xl font-extrabold text-sky-900 mb-3 transition-colors duration-300 hover:text-sky-800">
              {{ project.title }}
            </h3>
            <p class="text-sky-800 mb-5 transition-colors duration-300 hover:text-sky-900 leading-relaxed">
              {{ project.description }}
            </p>
            <div class="mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="inline-block bg-sky-300 text-sky-900 text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full transition-colors duration-300 hover:bg-sky-400 hover:text-sky-950"
              >
                {{ tech }}
              </span>
            </div>
            <a
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-sky-700 font-semibold hover:underline hover:text-sky-900 transition-colors duration-300"
            >
              Lihat Detail &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
