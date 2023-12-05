import React, { useState } from 'react';
import GiftForm from './GiftForm';
import './GiftList.css';

const GiftList = () => {
  const [gifts, setGifts] = useState([
    { id: 1, name: 'Regalo 1' },
    { id: 2, name: 'Regalo 2' },
    { id: 3, name: 'Regalo 3' },
  ]);

  const addGift = (newGift) => {
    setGifts([...gifts, { id: gifts.length + 1, name: newGift }]);
  };

  return (
    <div className="paper">
      <h2>Lista de Regalos de Navidad</h2>
      <ul className="lista">
        {gifts.map((gift) => (
          <li key={gift.id}>{gift.name}</li>
        ))}
      </ul>
      <GiftForm onAddGift={addGift} />
    </div>
  );
};

export default GiftList;
