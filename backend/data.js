// backend/data.js
const educationHistory = [ { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Teknik Informatika' },
{ id: 2, period: '2019 - 2022', institution: 'SMK NEGERI 1 SUKAMARA', major: 'MULTIMEDIA' } ];
const skills = [ { name: 'Vue.js', level: 'Mahir' },
{ name: 'JavaScript', level: 'Menengah' },
{ name: 'Tailwind CSS', level: 'Mahir' },
{ name: 'Node.js', level: 'Menengah' },
{ name: 'C++', level: 'Menengah' },
{ name: 'UI & UX', level: 'Mahir' },
{ name: 'Git & GitHub', level: 'Mahir' },
{ name: 'HTML5 & CSS3', level: 'Mahir' } ];
const projects = [ {
    title: 'Website Toko Online',
    image: 'https://via.placeholder.com/500x300?text=Proyek+1',
    description: 'Platform e-commerce dengan fitur keranjang belanja.',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    link: '#'
},
{
    title: 'Aplikasi Manajemen Tugas',
    image: 'https://via.placeholder.com/500x300?text=Proyek+2',
    description: 'Aplikasi untuk melacak progres tugas harian.',
    tech: ['React', 'Firebase'],
    link: '#'
} ];
module.exports = { educationHistory, skills, projects };