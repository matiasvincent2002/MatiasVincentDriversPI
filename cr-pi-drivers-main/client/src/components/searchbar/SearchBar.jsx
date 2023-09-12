import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDriverName } from '../../redux/actions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [driverName, setDriverName] = useState("");

  const handleOnChange = (e) => {
    setDriverName(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getDriverName(driverName));
  };

  return (
    <div>
      <input
        type="search"
        onChange={handleOnChange}
        value={driverName}
      />
      <button onClick={handleSubmit}>Buscar</button>
    </div>
  );
};

export default SearchBar;
