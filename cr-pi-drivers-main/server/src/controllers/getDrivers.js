const axios = require('axios');
const {Driver , Team } = require('../db')
const getDrivers = async (req, res) => {
  try {
    const response = await axios.get('http://localhost:5000/drivers');
    const drivers = response.data;

    // FILTRO LA INFO QUE QUEIRO
    const driversWithSelectedInfo = drivers.map(driver => ({
      id: driver.id,
      name: driver.name?.forename + ' ' + driver.name?.surname,
      firstName: driver.firstName,
      lastName: driver.lastName,
      description: driver.description,
      image: driver.image,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: driver.teams,
    }));

    const dbDrivers = await Driver.findAll({
      include:Team
    })
    if(!dbDrivers){
      res.status(200).json(driversWithSelectedInfo)
    }
    res.status(200).json([...dbDrivers,...driversWithSelectedInfo] );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while fetching drivers' });
  }
};

module.exports = { getDrivers };
