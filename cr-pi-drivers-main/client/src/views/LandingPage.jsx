import React from 'react';
import { Link } from 'react-router-dom';
import Style from '../utils/LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={Style.bg}>
      <header className={Style.header}>
        <div>
          <h1>Bienvenido a la Página de Inicio</h1>
          <p>Descubre todo lo que tenemos para ofrecerte en Drivers</p>
          <Link to='/home'><button>Home</button></Link>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
