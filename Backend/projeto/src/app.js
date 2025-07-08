const express = require('express');
const sequelize = require('./config/db'); 
const initModels = require('./models/init-models');
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
// Testar a conexão com o banco de dados e iniciar o servidor
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados bem-sucedida!');
    app.listen(3001, () => {
      console.log('Servidor rodando na porta 3001');
    });
  })
  .catch((err) => {
    console.error('Erro ao conectar com o banco de dados:', err);
  });



// Middleware de erro (deve ser o último)
app.use((err, req, res, next) => {
  console.error('Erro não tratado:', err);
  res.status(500).json({ error: 'Erro interno' });
});

const autorRouter = require('./routes/autorRoutes');
app.use('/api/autores', autorRouter); // Prefixo consistente com /api/pi

module.exports = app;