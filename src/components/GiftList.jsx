import React, { useState } from 'react';
import GiftForm from './GiftForm';
import './GiftList.css';

const GiftList = () => {
  const [gifts, setGifts] = useState([
    { id: 1, name: 'Regalo 1' },
  ]);

  const addGift = (newGift) => {
    setGifts([...gifts, { id: gifts.length + 1, name: newGift }]);
  };

  return (
    <div className="paper">
      <ul className="lista">
        {gifts.map((gift) => (
          <li key={gift.id}>{gift.name}</li>
        ))}
        <GiftForm onAddGift={addGift} />
      </ul>
      
    </div>
  );
};

export default GiftList;
