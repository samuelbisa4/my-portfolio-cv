<script setup>
import { ref } from 'vue';

const bounce = ref(false);

function triggerBounce() {
  bounce.value = true;
  setTimeout(() => {
    bounce.value = false;
  }, 600); // durasi animasi bounce diperpanjang
}
</script>

<template>
  <footer id="kontak" class="relative py-24 bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 text-white shadow-2xl overflow-hidden">
    <div class="absolute inset-0 bg-black opacity-30 pointer-events-none"></div>
    <div class="relative container mx-auto px-6 max-w-4xl text-center flex flex-col items-center gap-12">
      <p class="text-lg md:text-xl text-gray-300 font-light max-w-md leading-relaxed tracking-wide">
        Jangan ragu untuk terhubung atau bertanya. Saya siap membantu!
      </p>
      <a
        href="mailto:samuelbisa4@gmail.com"
        class="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transform transition duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-purple-400 max-w-xs w-full text-center"
        aria-label="Kirim Email ke Samuel"
      >
        Kirim Email
      </a>
      <div class="flex justify-center gap-16">
        <a
          href="https://github.com/samuelbisa4"
          target="_blank"
          rel="noopener noreferrer"
          :class="['text-gray-400 hover:text-indigo-400 transition-colors duration-500 flex items-center gap-3 text-xl sm:text-2xl', bounce ? 'animate-bounce-smooth' : '']"
          @click="triggerBounce"
          aria-label="GitHub Samuel"
        >
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 0.296C5.373 0.296 0 5.67 0 12.297c0 5.297 3.438 9.796 8.205 11.387.6.11.82-.26.82-.577v-2.02c-3.338.726-4.033-1.614-4.033-1.614-.546-1.39-1.333-1.76-1.333-1.76-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.24 1.84 1.24 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.304.76-1.605-2.665-.303-5.466-1.334-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.124-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.55 11.55 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.292-1.23 3.292-1.23.653 1.653.243 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.483 5.922.43.373.823 1.11.823 2.237v3.318c0 .32.216.697.825.58C20.565 22.09 24 17.59 24 12.296c0-6.626-5.373-12-12-12z"
            />
          </svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/feed/?trk=hb_signin"
          target="_blank"
          rel="noopener noreferrer"
          :class="['text-gray-400 hover:text-indigo-400 transition-colors duration-500 flex items-center gap-3 text-xl sm:text-2xl', bounce ? 'animate-bounce-smooth' : '']"
          @click="triggerBounce"
          aria-label="LinkedIn Samuel"
        >
          <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M22.23 0H1.77C.792 0 0 .78 0 1.74v20.52C0 23.22.792 24 1.77 24h20.46c.978 0 1.77-.78 1.77-1.74V1.74C24 .78 23.208 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.59a2.05 2.05 0 01-2.05-2.06 2.05 2.05 0 012.06-2.05 2.05 2.05 0 012.05 2.05 2.05 2.05 0 01-2.06 2.06zm15.12 12.86h-3.53v-5.56c0-1.32-.03-3.02-1.84-3.02-1.84 0-2.12 1.44-2.12 2.93v5.65h-3.53V9h3.39v1.56h.05c.47-.9 1.61-1.84 3.31-1.84 3.54 0 4.2 2.33 4.2 5.38v6.35z"
            />
          </svg>
          LinkedIn
        </a>
      </div>
      <p class="text-gray-400 text-sm font-light tracking-wide select-none pointer-events-none">
        &copy; {{ new Date().getFullYear() }} Samuel Jari Hartako. Dibuat dengan ❤️ oleh Anda.
      </p>
    </div>
  </footer>
</template>

<style scoped>
a:focus {
  outline-offset: 3px;
}

/* Custom smooth bounce animation */
@keyframes bounceSmooth {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-12%);
  }
}
.animate-bounce-smooth {
  animation: bounceSmooth 0.6s ease-in-out;
}
</style>
