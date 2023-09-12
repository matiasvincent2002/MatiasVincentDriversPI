import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByTeam, filterByOrigin } from '../../redux/actions';

const Filters = () => {
  const dispatch = useDispatch();
  const selectedTeam = useSelector((state) => state.selectedTeam);
  const selectedOrigin = useSelector((state) => state.selectedOrigin);

  const handleTeamFilterChange = (e) => {
    dispatch(filterByTeam(e.target.value));
  };

  const handleOriginFilterChange = (e) => {
    dispatch(filterByOrigin(e.target.value));
  };

  return (
    <div>
      <label htmlFor="teamFilter">Filtrar por Equipo:</label>
      <select id="teamFilter" onChange={handleTeamFilterChange} value={selectedTeam}>
        <option value="">Todos los equipos</option>
        <option value="Equipo1">Equipo 1</option>
        <option value="Equipo2">Equipo 2</option>
        {/* Agrega más opciones de equipos según sea necesario */}
      </select>

      <label>Filtrar por Origen:</label>
      <div>
        <label>
          <input
            type="radio"
            name="originFilter"
            value="API"
            checked={selectedOrigin === 'API'}
            onChange={handleOriginFilterChange}
          />
          API
        </label>

        <label>
          <input
            type="radio"
            name="originFilter"
            value="Base de Datos"
            checked={selectedOrigin === 'Base de Datos'}
            onChange={handleOriginFilterChange}
          />
          Base de Datos
        </label>

        {/* Agrega más opciones de origen según sea necesario */}
      </div>
    </div>
  );
};

export default Filters;
