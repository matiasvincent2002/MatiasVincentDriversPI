import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDriverById } from '../redux/actions';

const DetailPage = () => {
  const { idDriver } = useParams();
  const dispatch = useDispatch();
  const selectedDriver = useSelector((state) => state.selectedDriver);

  useEffect(() => {
    // Cuando el componente se monta, despacha la acción para obtener los detalles del conductor
    dispatch(getDriverById(idDriver));
  }, [dispatch, idDriver]);

  // Agrega un console.log para mostrar los detalles en la consola
  useEffect(() => {
    console.log("Detalles del conductor:", selectedDriver);
  }, [selectedDriver]);

  return (
    <div>
      <h1>Detalles del conductor con ID: {idDriver}</h1>
      {selectedDriver && (
        <div>
          <p>Nombre del conductor: 
            {!selectedDriver.name.forename?
            selectedDriver.name:
            selectedDriver.name.forename+' '+
            selectedDriver.name.surname} </p>
            {/*uso ternarios para distinguir entre api/bd*/}
          <p>Número: {selectedDriver.number}</p>
          <p>Código: {selectedDriver.code}</p>
          <p>Fecha de nacimiento: {selectedDriver.dob}</p>
          <p>Nacionalidad: {selectedDriver.nationality}</p>
          <p>Equipos: {selectedDriver.teams}</p>
          <p>Descripción: {selectedDriver.description}</p>
          {/* Mostrar la imagen */}
          <img src={selectedDriver.image.url} alt="Imagen del conductor" />
          {/* Mostrar otras propiedades según sea necesario */}
        </div>
      )}
    </div>
  );
};

export default DetailPage;
