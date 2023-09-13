import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  sortDriversAscending,
  sortDriversDescending,
  ordenByDateAsc,
  ordenByDateDesc,
  filterByApiDb,filterByTeam // Agrega aquí las acciones de filtro
 
} from '../../redux/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortOrderDob, setSortOrderDob] = useState('asc');
  const [origin, setOrigin] = useState('');


  const [team, setTeam] = useState(""); 
  // Utiliza el hook 'useSelector' para obtener datos del estado de Redux (los equipos disponibles)
  const teams = useSelector((state) => state.teams || []); // Inicializa como una matriz vacía si state.teams es falsy

  // Maneja el cambio en la selección del equipo
  const handleTeamChange = (e) => {
      // Actualiza el estado local con el valor seleccionado
      setTeam(e.target.value); 
      // Despacha la acción de filtro por equipo al almacén de Redux
      dispatch(filterByTeam(e.target.value));
  };

//despues de aca es mio
   const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);

    if (newSortOrder === 'asc') {
      dispatch(sortDriversAscending());
    } else if (newSortOrder === 'desc') {
      dispatch(sortDriversDescending());
    }
  };

  const handleSortChangeDob = (e) => {
    const newSortOrder = e.target.value;
    setSortOrderDob(newSortOrder);

    if (newSortOrder === 'asc') {
      dispatch(ordenByDateAsc());
    } else if (newSortOrder === 'desc') {
      dispatch(ordenByDateDesc());
    }
  };

  const handleFilterOrigin = (e) => {
    const newFilterOrder = e.target.value;
    setOrigin(newFilterOrder);

   dispatch(filterByApiDb(newFilterOrder));
    
  };

  const handleFilterTeam = (e) => {
    const newFilterOrder = e.target.value;
    setOrigin(newFilterOrder);

   dispatch(filterByApiDb(newFilterOrder));
    
  };

  return (
    <div>
      {/* Ordenamiento */}
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Ordenar Ascendente</option>
        <option value="desc">Ordenar Descendente</option>
      </select>
      {/* Ordenamiento */}
      <select value={sortOrderDob} onChange={handleSortChangeDob}>
        <option value="asc">Ordenar fecha mayor</option>
        <option value="desc">Ordenar fecha menor</option>
      </select>
      {/* Filtro */}
      <select value={origin} onChange={handleFilterOrigin}>
        <option value="all">Todos</option>
        <option value="api">API</option>
        <option value="db">DB</option>
      </select>

      <select onChange={handleTeamChange}>
                <option value="">Todos los equipos</option>
                {/* Mapea y muestra las opciones de equipo disponibles */}
                {teams.map((team) => (
                    <option key={team.id}> {team.name} </option>)
                )}
            </select>
     
    </div>
  );
};

export default NavBar;
