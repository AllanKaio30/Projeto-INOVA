const express = require('express');
const router = express.Router();
const piController = require('../controllers/piController');

router.post('/', piController.createPI);
router.get('/', piController.getAllPIs);

module.exports = router;