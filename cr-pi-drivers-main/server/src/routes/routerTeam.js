const express = require('express');
const router = express.Router();
const { getTeams } = require('../controllers/getTeams');

router.get('/', getTeams); // Asigna el controlador a la ruta*/

module.exports = router;
    