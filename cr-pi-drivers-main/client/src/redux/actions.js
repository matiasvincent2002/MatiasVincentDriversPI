import axios from 'axios';

// Acciones para obtener conductores y equipos
export const getDrivers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers`);
      const data = response.data;
      dispatch({ type: 'GET_DRIVERS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_DRIVERS_ERROR', payload: error.message });
    }
  };
};

export const getTeams = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/teams`);
      const data = response.data;
      dispatch({ type: 'GET_TEAMS_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_TEAMS_ERROR', payload: error.message });
    }
  };
};

// Acciones para buscar conductores por nombre y por ID
export const getDriverName = (name) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/name?name=${name}`);
      const data = response.data;
      dispatch({ type: 'GET_DRIVER_NAME_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_DRIVER_ERROR', payload: error.message });
    }
  };
};

export const getDriverById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      const data = response.data;
      dispatch({ type: 'GET_DRIVER_BY_ID_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'GET_DRIVER_ERROR', payload: error.message });
    }
  };
};

// Acciones para ordenar conductores por nombre y fecha de nacimiento
export const sortDriversAscending = () => {
  return { type: 'SORT_DRIVERS_ASCENDING' };
};

export const sortDriversDescending = () => {
  return { type: 'SORT_DRIVERS_DESCENDING' };
};

export const ordenByDateAsc = () => {
  return { type: 'SORT_ORDEN_BY_DATE_ASC' };
};

export const ordenByDateDesc = () => {
  return { type: 'SORT_ORDEN_BY_DATE_DESC' };
};

// Acción para establecer la página actual
export const setCurrentPage = (page) => {
  return {
    type: 'SET_CURRENT_PAGE',
    payload: page,
  };
};

// Acciones para filtrar conductores por equipo y origen
export const filterByTeam = (team) => {
  return {
    type: 'FILTER_BY_TEAM',
    payload: team,
  };
};

export const filterByOrigin = (origin) => {
  return {
    type: 'FILTER_BY_ORIGIN',
    payload: origin,
  };
};

// Acción para crear un nuevo conductor
export const createDriver = (formData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`http://localhost:3001/drivers`, formData);
      console.log(response.data);
      dispatch({ type: 'CREATE_DRIVER_SUCCESS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'CREATE_DRIVER_ERROR', payload: error.message });
    }
  };
};
