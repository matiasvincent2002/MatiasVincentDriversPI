import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers, getTeams } from '../redux/actions';
import NavBar from '../components/navbar/NavBar';
import SearchBar from '../components/searchbar/SearchBar';
import Cards from '../components/cards/Cards';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Style from '../utils/HomePage.module.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(getDrivers());
    dispatch(getTeams());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(drivers.length / itemsPerPage));
  }, [drivers]);

  return (
    <div>
      <header className={Style.header}>
        
      </header>

      <div className={Style.barra}>
        <NavBar />
       
      </div>

      <div>
        <SearchBar />
      </div>

      <div>
        {/* Asegúrate de pasar currentPage y totalPages como props a Cards */}
        <Cards drivers={drivers} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default HomePage;
