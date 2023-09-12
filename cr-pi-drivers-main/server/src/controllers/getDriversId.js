/*const axios = require('axios');
const { Driver, Team } = require('../db');



const getDriversId = async (req, res) => {
  try {
    const {idDriver} = req.params; // Asegúrate de obtener el ID del parámetro correctamente
    console.log(typeof(idDriver));

    // Intenta buscar en la API primero
    const  apiResponse  = await axios.get(`http://localhost:5000/drivers/${idDriver}`);
    const dataApiResponse = apiResponse.data
    if (dataApiResponse) {
      // Si se encuentra en la API, devuelve los datos de la API
      res.json(dataApiResponse);
    } else {
      // Si no se encuentra en la API, busca en la base de datos
      const dbDriver = await Driver.findByPk(idDriver, { include: [Team] });

      if (dbDriver) {
        res.json(dbDriver);
      } else {
        res.status(404).json({ message: 'Driver not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching driver details' });
  }
};

module.exports = { getDriversId };*/
const axios = require('axios');
const { Driver, Team } = require('../db');

const getDriversId = async (req, res) => {
  try {
    const { idDriver } = req.params; // Asegúrate de obtener el ID del parámetro correctamente
    console.log(typeof idDriver);

    //consulto que pinga es idDriver
    if(isNaN(idDriver)){
      // Intenta buscar en la base de datos primero
      const dbDriver = await Driver.findByPk(idDriver, { include: [Team] });

      if (dbDriver) {
        res.json(dbDriver);
      }
    }


     else {
      // Si no se encuentra en la base de datos, busca en la API
      const apiResponse = await axios.get(`http://localhost:5000/drivers/${idDriver}`);
      const dataApiResponse = apiResponse.data;

      if (dataApiResponse) {
        // Si se encuentra en la API, devuelve los datos de la API
        res.json(dataApiResponse);
      } else {
        res.status(404).json({ message: 'Driver not found' });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching driver details' });
  }
};

module.exports = { getDriversId };
