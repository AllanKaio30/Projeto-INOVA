const autorDB = require('../mockDB/autorMockData');

// CREATE
exports.createAutor = async (req, res) => {
  try {
    // Validação básica
    if (!req.body.nome || !req.body.pais) {
      return res.status(400).json({ 
        success: false, 
        error: "Nome e país são obrigatórios" 
      });
    }

    const novoAutor = await autorDB.create(req.body);
    res.status(201).json({ success: true, data: novoAutor });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Erro ao criar autor",
      details: error.message 
    });
  }
};

// READ (All)
exports.getAllAutores = async (req, res) => {
  try {
    const autores = await autorDB.findAll();
    res.json({ 
      success: true, 
      count: autores.length,
      data: autores 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Erro ao buscar autores",
      details: error.message
    });
  }
};

// READ (Single)
exports.getAutorById = async (req, res) => {
  try {
    const autor = await autorDB.findById(req.params.id);
    if (!autor) {
      return res.status(404).json({ 
        success: false, 
        error: "Autor não encontrado" 
      });
    }
    res.json({ success: true, data: autor });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Erro ao buscar autor",
      details: error.message
    });
  }
};

// UPDATE
exports.updateAutor = async (req, res) => {
  try {
    // Verifica se o autor existe
    const autorExistente = await autorDB.findById(req.params.id);
    if (!autorExistente) {
      return res.status(404).json({ 
        success: false, 
        error: "Autor não encontrado" 
      });
    }

    const autorAtualizado = await autorDB.update(req.params.id, req.body);
    res.json({ success: true, data: autorAtualizado });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Erro ao atualizar autor",
      details: error.message 
    });
  }
};

// DELETE
exports.deleteAutor = async (req, res) => {
  try {
    const autorRemovido = await autorDB.delete(req.params.id);
    if (!autorRemovido) {
      return res.status(404).json({ 
        success: false, 
        error: "Autor não encontrado" 
      });
    }
    res.json({ 
      success: true, 
      data: autorRemovido,
      message: "Autor removido com sucesso" 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: "Erro ao remover autor",
      details: error.message
    });
  }
};