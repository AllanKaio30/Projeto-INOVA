const { Sequelize } = require('sequelize');
const initModels = require('../models/init-models');
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});
const models = initModels(sequelize);
const Autor = models.autor;

// CREATE
exports.createAutor = async (req, res) => {
  const { name, email, bond, department, campus, university } = req.body;

  if (!name || !email || !bond || !department || !campus || !university) {
    return res.status(400).json({
      success: false,
      error: "Todos os campos são obrigatórios"
    });
  }

  try {
    const novoAutor = await Autor.create(req.body);
    res.status(201).json({ success: true, data: novoAutor });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Erro ao criar autor",
      details: error.message
    });
  }
};

exports.getAllAutores = async (req, res) => {
  try {
    const autores = await Autor.findAll(); // 'Autor' é o model vindo de models.autor
    res.status(200).json(autores);
  } catch (error) {
    console.error("Erro ao buscar autores:", error);
    res.status(500).json({
      success: false,
      error: 'Erro ao buscar autores',
      details: error.message
    });
  }
};

