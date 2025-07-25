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
    period: '2020 - 2023',
    institution: 'SMK NEGERI 1 SUKAMARA',
    major: 'MULTIMEDIA, OSIS, Laksana',
  },
  {
    id: 3,
    period: '2018 - 2020',
    institution: 'SMP NEGERI 1 SUKAMARA',
    major: 'OSIS',
  },
  {
    id: 4,
    period: '2013 - 2018',
    institution: 'SD MENDAWAI 1 SUKAMARA',
  },
];

const skills = [
  { name: 'Vue.js', level: 'Mahir' },
  { name: 'JavaScript', level: 'Menengah' },
  { name: 'Tailwind CSS', level: 'Menengah' },
  { name: 'Node.js', level: 'Menengah' },
  { name: 'C++', level: 'Menengah' },
  { name: 'Figma', level: 'Mahir' },
  { name: 'Git & GitHub', level: 'Mahir' },
  { name: 'Canva', level: 'Mahir' },
  { name: 'CorelDraw', level: 'Menengah' },
  { name: 'Filmora', level: 'Mahir' },
  { name: 'Excel', level: 'Menengah' },
  { name: 'Photoshop', level: 'Menengah' },
];

const projects = [
  {
    title: 'Figma Belajar Online',
    image: '/src/assets/Belajar.png',
    description: 'Platform e-learning dengan antarmuka intuitif dan pengalaman pengguna yang responsif.',
    tech: ['CorelDraw', 'Figma', 'Adobe Photoshop'],
    link: 'https://www.figma.com/design/ym1k1P7D9qrnjUwGqVMbJe/Portofolio-2?node-id=0-1&p=f&t=UJh0lydjWxt9B02d-0',
  },
  {
    title: 'Figma Desain Wisata',
    image: '/src/assets/Wisata.png',
    description: 'Desain antarmuka aplikasi wisata digital dengan fitur pencarian destinasi dan booking.',
    tech: ['CorelDraw', 'Figma', 'Adobe Photoshop'],
    link: 'https://www.figma.com/design/aWlDcdjxzwf14vuxW0JRh8/Portofolio-1?node-id=0-1&p=f&t=X27U1p1MjprGwQaG-0',
  },
  {
    title: 'Figma Sistem Flowchart',
    image: '/src/assets/Flow.png',
    description: 'Perancangan flowchart sistem menggunakan Figma untuk menggambarkan alur proses aplikasi.',
    tech: ['Figma'],
    link: 'https://www.figma.com/design/xMRzTpidYeushVzdSrtTbB/Flowchart?node-id=0-1&p=f&t=7d2KyYbe7qnYPqjV-0',
  },
  {
    title: 'Website Dewiji Wisata',
    image: '/src/assets/Dwiji.png',
    description: 'Platform wisata interaktif untuk Dewiji Tour, lengkap dengan daftar paket liburan dan formulir pemesanan.',
    tech: ['Next.js', 'Tailwind CSS','Figma', 'php', 'HTML5 & CSS3'],
    link: 'https://github.com/Arupika/Dewiji',
  },];

module.exports = { educationHistory, skills, projects };
