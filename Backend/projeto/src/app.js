const express = require('express');
const cors = require('cors');
const piRoutes = require('./routes/piRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use('/api/pi', piRoutes);

// Rota de saúde
app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

module.exports = app;