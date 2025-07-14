// backend/index.js
const express = require('express');
const cors = require('cors');
const { educationHistory, skills, projects } = require('./data.js');

const app = express();
app.use(cors());

app.get('/api/education', (req, res) => {
res.json(educationHistory);
});

app.get('/api/skills', (req, res) => {
res.json(skills);
});

app.get('/api/projects', (req, res) => {
res.json(projects);
});

// ✅ Tambahkan bagian ini:
const PORT = 3000;
app.listen(PORT, () => {
console.log(`✅ Server is running at http://localhost:${PORT}`);
});