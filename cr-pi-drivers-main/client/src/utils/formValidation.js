export const validateForm = (formData) => {
    const errors = {};
  
    if (!formData.nombre) {
      errors.nombre = 'El nombre es requerido.';
    }
  
    if (!formData.apellido) {
      errors.apellido = 'El apellido es requerido.';
    }
  
    if (!formData.nacionalidad) {
      errors.nacionalidad = 'La nacionalidad es requerida.';
    }
  
    if (!formData.fechaNacimiento) {
      errors.fechaNacimiento = 'La fecha de nacimiento es requerida.';
    }
  
    return errors;
  };
  