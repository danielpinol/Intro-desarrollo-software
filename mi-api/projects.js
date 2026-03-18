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

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
