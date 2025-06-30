const express = require('express');
const router = express.Router();
const autorController = require('../controllers/autorController');

// Rotas CRUD completas
router.route('/')
  .get(autorController.getAllAutores)
  .post(autorController.createAutor);

router.route('/:id')
  .get(autorController.getAutorById)
  .put(autorController.updateAutor)
  .delete(autorController.deleteAutor);

module.exports = router;