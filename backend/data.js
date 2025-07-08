// backend/data.js
const educationHistory = [
  {
    id: 1,
    period: '2023 - Sekarang',
    institution: 'Universitas Amikom Yogyakarta',
    major: 'S1 - Teknik Informatika',
  },
  {
    id: 2,
    period: '2019 - 2022',
    institution: 'SMK NEGERI 1 SUKAMARA',
    major: 'MULTIMEDIA',
  },
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Mahir' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'C++', level: 'Menengah' },
  { name: 'UI & UX', level: 'Mahir' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'HTML5 & CSS3', level: 'Mahir' },
];

const projects = [
  {
    title: 'Website Toko Online',
    image: '/src/assets/Belajar.png',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Aplikasi Manajemen Tugas',
    image: '/src/assets/Wisata.png',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#',
  },
  {
    title: 'Sistem Booking Studio',
    image: '/src/assets/Flow.png',
    description: 'Aplikasi booking studio fotografi secara online.',
    tech: ['Laravel', 'MySQL', 'Bootstrap'],
    link: '#',
  },
  {
    title: 'Portofolio Interaktif',
    image: '/src/assets/Dwiji.png',
    description: 'Website portofolio pribadi dengan animasi modern.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#',
  } ];

module.exports = { educationHistory, skills, projects };
