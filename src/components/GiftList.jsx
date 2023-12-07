
import React, { useState } from 'react';
import GiftForm from './GiftForm';
import '../App.css'; 
import './GiftList.css';

const GiftList = () => {
  const [gifts, setGifts] = useState([
    { id: 1, name: 'Regalo 1' },
  ]);

  const addGift = (newGift) => {
    if (newGift.trim() !== '' && !gifts.some(gift => gift.name.toLowerCase() === newGift.toLowerCase())) {
      setGifts([...gifts, { id: gifts.length + 1, name: newGift }]);
    } else {
      console.log('Error: Regalo vacío o repetido');
    }
  };

  const removeGift = (id) => {
    const updatedGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(updatedGifts);
  };

  const removeAllGifts = () => {
    setGifts([]);
  };

  return (
    <div className="paper">
      {gifts.length === 0 ? (
        <p className="lista" style={{ marginTop: '20px' }}>there are no presents, add some!!</p>
      ) : (
        <ul className="lista">
          {gifts.map((gift) => (
            <li key={gift.id}>
              {gift.name}
              <button onClick={() => removeGift(gift.id)} className='buttondelete'> X </button>
            </li>
          ))}
        </ul>
      )}
      <button className='buttonRemoveall' onClick={removeAllGifts}>Eliminar Todos</button>
      <GiftForm onAddGift={addGift} />
    </div>
  );
};

export default GiftList;