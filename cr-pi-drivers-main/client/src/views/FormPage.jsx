import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createDriver, getTeams } from '../redux/actions';

const FormPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const opcionesEscuderias = useSelector((state) => state.teams);

  useEffect(() => {
    if (opcionesEscuderias.length === 0) {
      dispatch(getTeams())
        .then(() => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [opcionesEscuderias, dispatch]);

  const [driverData, setDriverData] = useState({
    name: '',
    firstName: '',
    lastName: '',
    nationality: '',
    image: '',
    dob: '',
    description: '',
    teams: [],
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    nationality: '',
    image: '',
    dob: '',
    description: '',
    teams: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!driverData.firstName) {
      newErrors.firstName = 'El nombre es obligatorio.';
    }

    if (!driverData.lastName) {
      newErrors.lastName = 'El apellido es obligatorio.';
    }

    if (!driverData.nationality) {
      newErrors.nationality = 'La nacionalidad es obligatoria.';
    }

    // Puedes agregar más validaciones según tus necesidades.

    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = validateForm();

    // Si no hay errores, envía el formulario.
    if (Object.keys(newErrors).length === 0) {
      driverData.name = driverData.firstName + ' ' + driverData.lastName;
      dispatch(createDriver(driverData));

      // Restablece los campos del formulario después de enviarlo.
      setDriverData({
        name: '',
        firstName: '',
        lastName: '',
        nationality: '',
        image: '',
        dob: '',
        description: '',
        teams: [],
      });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDriverData({ ...driverData, [name]: value });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.value;
    setDriverData({ ...driverData, image: imageFile });
  };

  const handleTeamsChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setDriverData({ ...driverData, teams: [...driverData.teams, ...selectedOptions] });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h1>Crear Conductor</h1>
        {loading ? (
          <p>Cargando opciones de escuderías...</p>
        ) : (
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <label>Nombre:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={driverData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}

            <label>Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={driverData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}

            <label>Nacionalidad:</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              value={driverData.nationality}
              onChange={handleInputChange}
            />
            {errors.nationality && <div className="error">{errors.nationality}</div>}

            <label>Imagen:</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
            />
            {errors.image && <div className="error">{errors.image}</div>}

            <label>Fecha de Nacimiento:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={driverData.dob}
              onChange={handleInputChange}
            />
            {errors.dob && <div className="error">{errors.dob}</div>}

            <label>Descripción:</label>
            <textarea
              id="description"
              name="description"
              value={driverData.description}
              onChange={handleInputChange}
            ></textarea>
            {errors.description && <div className="error">{errors.description}</div>}

            <label>Escuderías:</label>
            <select id="teams" multiple={true} value={driverData.teams} onChange={handleTeamsChange}>
              {opcionesEscuderias && opcionesEscuderias?.map((escuderia) => (
                <option key={escuderia.id} value={escuderia.name}>
                  {escuderia.name}
                </option>
              ))}
            </select>
            {errors.teams && <div className="error">{errors.teams}</div>}

            <button type="submit">Crear Driver</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default FormPage;
