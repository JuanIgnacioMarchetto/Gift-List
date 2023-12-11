
import React, { useState } from 'react';
import AddButton from './Button';
import './GiftForm.css';

const GiftForm = ({ onAddGift }) => {
  const [newGift, setNewGift] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    setNewGift(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGift.trim() !== '') {
      onAddGift(newGift, quantity);
      setNewGift('');
      setQuantity(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h3 className='H3'>Add🎁</h3>
        <input type="text" value={newGift} onChange={handleChange} placeholder="Nombre del regalo" />
      </label>
      <label>
        Cantidad:
        <input type="number" value={quantity} onChange={handleQuantityChange} min="1" />
      </label>
      <AddButton onClick={handleSubmit} />
    </form>
  );
};

export default GiftForm;