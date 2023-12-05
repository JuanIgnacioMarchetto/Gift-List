import React from 'react';

const AddButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Agregar a la Lista
    </button>
  );
};

export default AddButton;
