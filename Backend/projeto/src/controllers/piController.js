const PI = require('../models/PI');

exports.createPI = async (req, res) => {
  try {
    const newPI = await PI.create(req.body);
    res.status(201).json({ success: true, data: newPI });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getAllPIs = async (req, res) => {
  try {
    const pis = await PI.findAll();
    res.json({ success: true, data: pis });
  } catch (error) {
    res.status(500).json({ success: false, error: "Erro ao buscar PIs" });
  }
};