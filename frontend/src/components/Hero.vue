<template>
<section id="profil" class="bg-blue-50 py-20 w-full">
    <div class="container mx-auto flex flex-col md:flex-row items-center px-6">
    
    <!-- Teks kiri -->
    <div class="md:w-1/2 mb-10 md:mb-0 flex flex-col justify-center px-4 text-center md:text-left">
        <h1 class="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
        Halo, Saya <span class="text-blue-600">Samuel Jari Hartako</span>
        </h1>
        <p class="text-xl text-gray-700 mb-8 leading-relaxed">
        Mahasiswa Teknik Informatika yang bersemangat dalam pengembangan web dan desain antarmuka.
        </p>

        <!-- Badge Skill -->
        <div class="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
        <span class="bg-blue-200 text-blue-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            Web Development
        </span>
        <span class="bg-green-200 text-green-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            UI/UX Design
        </span>
        <span class="bg-purple-200 text-purple-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            JavaScript
        </span>
        <span class="bg-red-200 text-red-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            C++
        </span>
        <span class="bg-yellow-200 text-yellow-900 text-sm font-semibold px-3 py-1 rounded-full shadow-sm">
            C#
        </span>
        </div>

        <!-- Tombol oval biru dengan teks nyambung -->
        <a
        href="#kontak"
        class="bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 active:bg-blue-800 transition-colors duration-300 select-none inline-block max-w-max whitespace-nowrap"
        >
        Hubungi Saya
        </a>
    </div>

    <!-- Foto Profil kanan -->
    <div class="md:w-1/2 flex justify-center px-4">
        <img
        src="/src/assets/samuel.jpeg"
        alt="Foto Profil"
        class="w-80 h-80 rounded-full object-cover shadow-lg border-4 border-white"
        />
    </div>
    </div>
</section>
</template>
