import React, { useState, useEffect } from 'react';
import GiftForm from './GiftForm';
import Modal from './Modal';
import '../App.css'; 
import './GiftList.css';

const GiftList = () => {
  const [gifts, setGifts] = useState(() => {
    const savedGifts = localStorage.getItem('gifts');
    return savedGifts ? JSON.parse(savedGifts) : [{ id: 1, name: 'Regalo 1', quantity: 1, imageLink: '', recipient: '' }];
  });

  useEffect(() => {
    localStorage.setItem('gifts', JSON.stringify(gifts));
  }, [gifts]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addGift = (newGift, quantity, imageLink, recipient) => {
    setGifts((prevGifts) => [
      ...prevGifts,
      { id: Date.now(), name: newGift, quantity, imageLink, recipient },
    ]);
  };

  const removeGift = (id) => {
    const updatedGifts = gifts.filter((gift) => gift.id !== id);
    setGifts(updatedGifts);
  };

  const removeAllGifts = () => {
    setGifts([]);
  };

  const editGift = (id, newName, newQuantity, newImageLink, newRecipient) => {
    const updatedGifts = gifts.map((gift) => 
      gift.id === id
        ? { ...gift, name: newName, quantity: newQuantity, imageLink: newImageLink, recipient: newRecipient }
        : gift
    );
    setGifts(updatedGifts);
  };

  return (
    <div className="paper">
      {gifts.length === 0 ? (
        <p className="empty-message" style={{ marginTop: '20px' }}>No hay regalos aún. ¡Agrega algunos!</p>
      ) : (
        <ul className="lista">
          {gifts.map((gift) => (
            <li key={gift.id}>
              {gift.name} - Cantidad: {gift.quantity} - Destinatario: {gift.recipient}
              <button onClick={() => removeGift(gift.id)} className='buttondelete'> X </button>
              <button onClick={() => editGift(gift.id)} className='buttonEdit'> Editar </button>
            </li>
          ))}
        </ul>
      )}
      <button className='buttonRemoveall' onClick={removeAllGifts}>Eliminar Todos</button>
      <button className='buttonAdd' onClick={openModal}>Agregar Regalo</button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <GiftForm onAddGift={addGift} />
        </Modal>
      )}
    </div>
  );
};

export default GiftList;
