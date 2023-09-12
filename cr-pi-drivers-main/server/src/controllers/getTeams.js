const axios = require('axios');
const { Team } = require('../db.js');
require('dotenv').config();

const getTeams = async (req, res) => {
  try {
    // Verificar si la base de datos está vacía
    const dbTeams = await Team.findAll();

    if (dbTeams.length === 0) {
      // Si la base de datos está vacía, obtener los equipos de la API
      const response = await axios.get('http://localhost:5000/drivers'); // Reemplaza 'URL_DE_TU_API_AQUI' con la URL correcta de tu API
      const apiDrivers = response.data;
      
      // Obtener equipos únicos de los datos de la API
      const uniqueTeams = new Set();
      apiDrivers.forEach((driver) => {
        if (driver.teams) {
          const teams = driver.teams.split(',').map((team) => team.trim());
          teams.forEach((team) => {
            if (team) {
              uniqueTeams.add(team);
            }
          });
        }
      });

      // Convertir equipos únicos en un arreglo
      const apiTeams = [...uniqueTeams];

      // Guardar equipos en la base de datos
      const createdTeams = await Team.bulkCreate(apiTeams.map((name) => ({ name })));

      console.log('Los equipos se han agregado con éxito a la base de datos.');
      res.json(apiTeams); // Devolver los equipos obtenidos de la API como respuesta
    } else {
      // Si la base de datos no está vacía, devolver los equipos de la base de datos
      res.json(dbTeams);
    }
  } catch (error) {
    console.error('Error al obtener o crear equipos:', error);
    res.status(500).json({ message: 'Ocurrió un error al obtener los equipos' });
  }
};

module.exports = { getTeams };
