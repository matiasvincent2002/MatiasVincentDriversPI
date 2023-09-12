import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../redux/actions';
import NavBar from '../components/navbar/NavBar';
import SearchBar from '../components/searchbar/SearchBar';
import Cards from '../components/cards/Cards';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Filters from '../components/filter/filters';

const HomePage = () => {
  const dispatch = useDispatch();
  const drivers = useSelector((state) => state.drivers);
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const itemsPerPage = 9;

  useEffect(() => {
    dispatch(getDrivers());
  }, [dispatch]);

  useEffect(() => {
    setTotalPages(Math.ceil(drivers.length / itemsPerPage));
  }, [drivers]);

  return (
    <div>
      <header>
        <h1>Bienvenido a la Página Principal</h1>
      </header>

      <div>
        <NavBar />
        <Link to={`/form`}>
          <button>Create Drivers</button>
        </Link>
      </div>

      <div>
        <SearchBar />
      </div>

      <div>
        <Cards drivers={drivers} currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default HomePage;
