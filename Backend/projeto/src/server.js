const app = require('./app');
const sequelize = require('./config/db');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Conexão com PostgreSQL estabelecida.');
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao conectar ao banco:', err);
  });