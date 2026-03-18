const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let educations = [
  {
    id: 1,
    institution: 'Colegio Internacional Montessori',
    degree: 'Bachiller en Ciencias y Letras',
    field: 'Ciencias y Letras',
    startYear: 2008,
    endYear: 2023,
    status: 'Graduado'
  },
  {
    id: 2,
    institution: 'Universidad Francisco Marroquín',
    degree: 'Licenciatura en Ingeniería en Computer Science',
    field: 'Computer Science',
    startYear: 2025,
    endYear: null,
    status: 'En curso'
  }
];

// GET /education - Ver todos los estudios
app.get('/education', (_req, res) => {
  res.json(educations);
});

// GET /education/:id - Ver un estudio específico
app.get('/education/:id', (req, res) => {
  const education = educations.find(e => e.id === parseInt(req.params.id));

  if (!education) {
    return res.status(404).json({ error: 'Educación no encontrada' });
  }

  res.json(education);
});

// POST /education - Crear un nuevo estudio
app.post('/education', (req, res) => {
  const { institution, degree, field, startYear, endYear, status } = req.body;

  if (!institution || !degree || !field || !startYear) {
    return res.status(422).json({ error: 'Campos requeridos: institution, degree, field, startYear' });
  }

  const newEducation = {
    id: educations.length + 1,
    institution,
    degree,
    field,
    startYear,
    endYear: endYear || null,
    status: status || 'En curso'
  };

  educations.push(newEducation);
  res.status(201).json(newEducation);
});

// PATCH /education/:id - Actualizar un estudio parcialmente
app.patch('/education/:id', (req, res) => {
  const index = educations.findIndex(e => e.id === parseInt(req.params.id));

  if (index === -1) {
    return res.status(404).json({ error: 'Educación no encontrada' });
  }

  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(422).json({ error: 'Se requiere al menos un campo para actualizar' });
  }

  educations[index] = { ...educations[index], ...req.body };
  res.json(educations[index]);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
