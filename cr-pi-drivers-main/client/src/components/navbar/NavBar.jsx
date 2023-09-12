import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortDriversAscending, sortDriversDescending, ordenByDateAsc, ordenByDateDesc } from '../../redux/actions';

const NavBar = () => {
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortOrderDos, setSortOrderDos] = useState('asc');

  const handleSortChange = (e) => {
    const newSortOrder = e.target.value;
    setSortOrder(newSortOrder);

    if (newSortOrder === 'asc') {
      dispatch(sortDriversAscending());
    } else if (newSortOrder === 'desc') {
      dispatch(sortDriversDescending());
    }
  };

  const handleSortChangePrueba = (e) => {
    const newSortOrder = e.target.value;
    setSortOrderDos(newSortOrder);

    if (newSortOrder === 'asc') {
      dispatch(ordenByDateAsc());
    } else if (newSortOrder === 'desc') {
      dispatch(ordenByDateDesc());
    }
  };

  return (
    <div>
      <select value={sortOrder} onChange={handleSortChange}>
        <option value="asc">Ordenar Ascendente</option>
        <option value="desc">Ordenar Descendente</option>
      </select>

      <select value={sortOrderDos} onChange={handleSortChangePrueba}>
        <option value="asc">Ordenar fecha mayor</option>
        <option value="desc">Ordenar fecha menor</option>
      </select>
    </div>
  );
};

export default NavBar;
