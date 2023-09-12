import { Link } from "react-router-dom";
import Style from './Card.module.css';
import React from 'react';

const Card = ({ id, name, image, teams, dob }) => {
  return (
    <div>
      <div className={Style.card}>
        <div className={Style.cardBody}>
          <img src={image} className={Style.img} alt={`${name} Image`} />
          <div className={Style.cardFooter}>
            <p>{name}</p>
            <p>{dob}</p>
            <p>Equipos:</p>
            <p> {teams}</p>
            {/* Corregir la ruta para pasar el ID dinámicamente */}
            <Link to={`/detail/${id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;

