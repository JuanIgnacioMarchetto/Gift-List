import React from 'react';
import './buton.css'

const AddButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      ADD
    </button>
  );
};

export default AddButton;
