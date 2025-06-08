const express = require('express');
const app = express();

// Middleware crítico deve vir primeiro
app.use(express.json());

// Debug de todas as requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Registre as rotas
const piRouter = require('./routes/piRoutes');
app.use('/api/pi', piRouter);

// Rota health check
app.get('/health', (req, res) => {
  console.log('Health check executado');
  res.json({ status: 'OK', time: new Date() });
});

// Middleware de erro (deve ser o último)
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ error: 'Erro interno' });
});

module.exports = app;