import React, { useState } from 'react';
import AddButton from './Button';
import './GiftForm.css';

const GiftForm = ({ onAddGift }) => {
  const [newGift, setNewGift] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [imageLink, setImageLink] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleChange = (e) => {
    setNewGift(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10) || 1);
  };

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newGift.trim() !== '') {
      onAddGift(newGift, quantity, imageLink, recipient);
      setNewGift('');
      setQuantity(1);
      setImageLink('');
      setRecipient('');
    }
  };

  return (
    <form className="mt-8 text-center" onSubmit={handleSubmit}>
      <div className="flex flex-col items-center mt-4">
        <label className="text-darkgreen block mb-2">Agregar🎁</label>
        <input
          className="p-2 mb-2 w-60 max-w-md"
          type="text"
          placeholder="Nombre del regalo"
          value={newGift}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="text-darkgreen block mb-2">Cantidad:</label>
        <input
          className="p-2 mb-2 w-60 max-w-md"
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="text-darkgreen block mb-2">Enlace de Imagen:</label>
        <input
          className="p-2 mb-2 w-60 max-w-md"
          type="text"
          placeholder="Pegar enlace de imagen"
          value={imageLink}
          onChange={handleImageLinkChange}
        />
      </div>
      <div className="flex flex-col items-center">
        <label className="text-darkgreen block mb-2">Destinatario:</label>
        <input
          className="p-2 mb-2 w-60 max-w-md"
          type="text"
          placeholder="Nombre del destinatario"
          value={recipient}
          onChange={handleRecipientChange}
        />
      </div>
      <AddButton />
    </form>
  );
};

export default GiftForm;
